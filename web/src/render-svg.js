import { buildGridLines, buildYearLine } from '@svg-layout/lines';
import { generatePathToChild, generateBindingPath } from '@svg-layout/path-factory';

var SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(name, attrs) {
  var node = document.createElementNS(SVG_NS, name);
  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      var value = attrs[key];
      if (value === undefined || value === null || value === '') {
        return;
      }
      node.setAttribute(key, String(value));
    });
  }
  return node;
}

function appendTspan(textEl, content, attrs) {
  var tspan = svgEl('tspan', attrs);
  tspan.textContent = content == null ? '' : String(content);
  textEl.appendChild(tspan);
  return tspan;
}

function renderHeader(svg, node) {
  var g = svgEl('g');
  g.appendChild(svgEl('rect', {
    class: 'node_header',
    x: node.x_padded,
    y: node.y_padded,
    height: node.height,
    width: node.width
  }));

  var text = svgEl('text', {
    class: 'node_header_title',
    x: node.cx,
    y: node.cy
  });
  appendTspan(text, node.title);
  g.appendChild(text);
  svg.appendChild(g);
}

function renderPattern(svg, node) {
  var g = svgEl('g', {
    class: 'g_' + node.id,
    'data-node-id': node.id
  });

  g.appendChild(svgEl('rect', {
    class: 'node_design',
    x: node.x_padded,
    y: node.y_padded,
    ry: 7,
    rx: 7,
    r: 7,
    height: node.height,
    width: node.width
  }));

  var text = svgEl('text', {
    class: 'node_txt',
    x: node.cx,
    y: node.y_padded
  });
  appendTspan(text, node.name, { dy: '16.8' });
  appendTspan(text, node.year, { x: node.cx, dy: '16.8' });
  var author = appendTspan(text, node.author, { x: node.cx, dy: '16.8' });
  author.setAttribute('class', 'node_txt_auth');
  g.appendChild(text);
  svg.appendChild(g);
}

function renderTechnology(svg, node, classNameTech) {
  var className = 'g_' + node.id;
  if (classNameTech) {
    className += ' ' + classNameTech;
  }

  var g = svgEl('g', {
    class: className,
    'data-node-id': node.id
  });

  g.appendChild(svgEl('ellipse', {
    class: 'node_tech',
    cx: node.cx,
    cy: node.cy,
    rx: node.rx,
    ry: node.ry
  }));

  var text = svgEl('text', {
    class: 'node_txt',
    x: node.cx,
    y: node.y_padded
  });
  appendTspan(text, node.name, { dy: '32' });
  appendTspan(text, node.year, { x: node.cx, dy: '16.8' });
  g.appendChild(text);
  svg.appendChild(g);
}

function childPaths(svgenv, dpatterns, byId) {
  var paths = [];
  dpatterns.forEach(function(node) {
    (node.children || []).forEach(function(childId) {
      var child = byId[childId];
      if (!child) {
        return;
      }
      var d = generatePathToChild(svgenv, node, child);
      if (d) {
        paths.push(d);
      }
    });
  });
  return paths;
}

function bindingPaths(svgenv, gridNodes) {
  var paths = [];
  gridNodes.forEach(function(node) {
    (node.related || []).forEach(function(related) {
      var classNames = related.classNames && related.classNames.length ?
        related.classNames.join(' ') : '';
      var d = generateBindingPath(svgenv, node, related);
      if (d) {
        paths.push({
          path: d,
          classNames: ('line line-dashed ' + classNames).trim()
        });
      }
    });
  });
  return paths;
}

export function renderSvg(container, data) {
  var svgenv = data.svgenv;
  var svg = svgEl('svg', {
    id: 'mvc_tree',
    xmlns: SVG_NS,
    version: '1.1',
    width: '100%',
    height: '100%',
    viewBox: svgenv.viewBox,
    preserveAspectRatio: 'xMinYMin'
  });

  if (svgenv.showGrid) {
    buildGridLines(svgenv).forEach(function(line) {
      svg.appendChild(svgEl('path', {
        d: line,
        fill: 'none',
        class: 'grid_line'
      }));
    });
  }

  data.rowDividers.forEach(function(divider) {
    var line = buildYearLine(svgenv, divider.year, divider.row);
    var text = svgEl('text', {
      x: line.x,
      y: line.y,
      class: 'year_line_txt'
    });
    appendTspan(text, line.year, { dy: '4.233003616333008' });
    svg.appendChild(text);
    svg.appendChild(svgEl('path', {
      d: line.path,
      fill: 'none',
      class: 'year_line_path'
    }));
  });

  data.headers.forEach(function(node) {
    renderHeader(svg, node);
  });

  childPaths(svgenv, data.dpatterns, data.byId).forEach(function(d) {
    svg.appendChild(svgEl('path', {
      d: d,
      class: 'line'
    }));
  });

  bindingPaths(svgenv, data.gridNodes).forEach(function(pathObj) {
    svg.appendChild(svgEl('path', {
      d: pathObj.path,
      class: pathObj.classNames
    }));
  });

  data.dpatterns.forEach(function(node) {
    renderPattern(svg, node);
  });

  data.technologies.forEach(function(node) {
    var classNames = node.classNames && node.classNames.length ?
      node.classNames : [''];
    classNames.forEach(function(classNameTech) {
      renderTechnology(svg, node, classNameTech);
    });
  });

  svg.addEventListener('click', function(event) {
    var group = event.target.closest && event.target.closest('g[data-node-id]');
    if (!group) {
      return;
    }
    var nodeId = group.getAttribute('data-node-id');
    var panel = document.getElementById(nodeId);
    window.location.hash = nodeId;
    if (panel && typeof panel.scrollIntoView === 'function') {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  container.appendChild(svg);
  return svg;
}
