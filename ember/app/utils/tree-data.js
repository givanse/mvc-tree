import columnsFixture from '@jsons/columns';
import headersFixture from '@jsons/node-headers';
import techsFixture from '@jsons/node-technologies';
import patternsFixture from '@jsons/node-dpatterns';
import { computeNodeGeometry } from '@svg-layout/grid-node';
import { DEFAULT_SVG_ENV, calcViewBox } from '@svg-layout/environment';

export const ROW_DIVIDERS = [
  { year: 1980, row: 3 },
  { year: 1990, row: 6 },
  { year: 2000, row: 15 },
  { year: 2010, row: 25 },
];

export function createSvgEnv(options) {
  let showGrid = options && options.showGrid;
  if (showGrid == null) {
    showGrid = false;
  }

  let box = calcViewBox(
    DEFAULT_SVG_ENV.colW,
    DEFAULT_SVG_ENV.rowH,
    DEFAULT_SVG_ENV.maxCols,
    DEFAULT_SVG_ENV.maxRows,
  );

  return Object.assign({}, DEFAULT_SVG_ENV, box, { showGrid });
}

function records(fixture) {
  return (fixture && fixture.data) || [];
}

function columnMap(fixture) {
  let map = {};
  records(fixture).forEach((record) => {
    map[record.id] = parseInt(record.attributes.col, 10);
  });
  return map;
}

function relatedIds(record) {
  let rel = record.relationships && record.relationships.related;
  if (!rel || !rel.data) {
    return [];
  }
  let data = Array.isArray(rel.data) ? rel.data : [rel.data];
  return data.map((item) => item.id);
}

function columnId(record) {
  return (
    record.relationships &&
    record.relationships.column &&
    record.relationships.column.data &&
    record.relationships.column.data.id
  );
}

function hydrate(record, kind, columns, svgenv) {
  let attrs = record.attributes || {};
  let col = columns[columnId(record)];
  let row = parseInt(attrs.row, 10);
  let geometry = computeNodeGeometry(svgenv, col, row);

  return Object.assign(
    {
      id: record.id,
      kind,
      name: attrs.name,
      title: attrs.title,
      year: attrs.year,
      author: attrs.author,
      row,
      col,
      children: attrs.children || [],
      definitions: attrs.definitions || null,
      classNames:
        attrs.classNames && attrs.classNames.length ? attrs.classNames : [''],
      relatedIds: relatedIds(record),
    },
    geometry,
  );
}

function yearSortValue(node) {
  let parsed = parseInt(node.year, 10);
  return isNaN(parsed) ? 0 : parsed;
}

export function loadTreeData(options) {
  let svgenv = createSvgEnv(options);
  let columns = columnMap(columnsFixture);

  let dpatterns = records(patternsFixture).map((record) => {
    return hydrate(record, 'dpattern', columns, svgenv);
  });

  let technologies = records(techsFixture).map((record) => {
    return hydrate(record, 'technology', columns, svgenv);
  });

  let headers = records(headersFixture).map((record) => {
    return hydrate(record, 'header', columns, svgenv);
  });

  let byId = {};
  dpatterns.concat(technologies).forEach((node) => {
    byId[node.id] = node;
  });

  function resolveRelated(node) {
    node.related = node.relatedIds.map((id) => byId[id]).filter(Boolean);
  }

  dpatterns.forEach(resolveRelated);
  technologies.forEach(resolveRelated);

  let gridNodes = dpatterns.concat(technologies).sort((a, b) => {
    let yearA = yearSortValue(a);
    let yearB = yearSortValue(b);
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    return 0;
  });

  return {
    svgenv,
    dpatterns,
    technologies,
    headers,
    gridNodes,
    byId,
    rowDividers: ROW_DIVIDERS,
  };
}
