import columnsFixture from '@jsons/columns';
import headersFixture from '@jsons/node-headers';
import techsFixture from '@jsons/node-technologies';
import patternsFixture from '@jsons/node-dpatterns';
import { computeNodeGeometry } from '@svg-layout/grid-node';
import { createSvgEnv, ROW_DIVIDERS } from './svg-env.js';

function records(fixture) {
  return (fixture && fixture.data) || [];
}

function columnMap(fixture) {
  var map = {};
  records(fixture).forEach(function(record) {
    map[record.id] = parseInt(record.attributes.col, 10);
  });
  return map;
}

function relatedIds(record) {
  var rel = record.relationships && record.relationships.related;
  if (!rel || !rel.data) {
    return [];
  }
  var data = Array.isArray(rel.data) ? rel.data : [rel.data];
  return data.map(function(item) {
    return item.id;
  });
}

function columnId(record) {
  return record.relationships &&
    record.relationships.column &&
    record.relationships.column.data &&
    record.relationships.column.data.id;
}

function hydrate(record, kind, columns, svgenv) {
  var attrs = record.attributes || {};
  var col = columns[columnId(record)];
  var row = parseInt(attrs.row, 10);
  var geometry = computeNodeGeometry(svgenv, col, row);
  var year = attrs.year;

  return Object.assign({
    id: record.id,
    kind: kind,
    name: attrs.name,
    title: attrs.title,
    year: year,
    author: attrs.author,
    row: row,
    col: col,
    children: attrs.children || [],
    definitions: attrs.definitions || null,
    classNames: attrs.classNames || [],
    relatedIds: relatedIds(record)
  }, geometry);
}

function yearSortValue(node) {
  var parsed = parseInt(node.year, 10);
  return isNaN(parsed) ? 0 : parsed;
}

export function loadTreeData(options) {
  var svgenv = createSvgEnv(options);
  var columns = columnMap(columnsFixture);

  var dpatterns = records(patternsFixture).map(function(record) {
    return hydrate(record, 'dpattern', columns, svgenv);
  });

  var technologies = records(techsFixture).map(function(record) {
    return hydrate(record, 'technology', columns, svgenv);
  });

  var headers = records(headersFixture).map(function(record) {
    return hydrate(record, 'header', columns, svgenv);
  });

  var byId = {};
  dpatterns.concat(technologies).forEach(function(node) {
    byId[node.id] = node;
  });

  function resolveRelated(node) {
    node.related = node.relatedIds.map(function(id) {
      return byId[id];
    }).filter(Boolean);
  }

  dpatterns.forEach(resolveRelated);
  technologies.forEach(resolveRelated);

  var gridNodes = dpatterns.concat(technologies).sort(function(a, b) {
    var yearA = yearSortValue(a);
    var yearB = yearSortValue(b);
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    return 0;
  });

  return {
    svgenv: svgenv,
    dpatterns: dpatterns,
    technologies: technologies,
    headers: headers,
    gridNodes: gridNodes,
    byId: byId,
    rowDividers: ROW_DIVIDERS
  };
}
