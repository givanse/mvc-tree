import { articleHtmlFor } from './articles.js';

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function definitionItems(definitions) {
  return (definitions || []).map(function(definition) {
    return (
      '<li class="list-group-item">' +
      '<b>' + escapeHtml(definition.term) + '</b>: ' + escapeHtml(definition.text) +
      '</li>'
    );
  }).join('');
}

function compareOptions(current, dpatterns) {
  return dpatterns.filter(function(pattern) {
    return pattern.id !== current.id && pattern.definitions && pattern.definitions.length;
  }).slice().sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

function selectHtml(options) {
  var opts = options.map(function(pattern) {
    return '<option value="' + escapeHtml(pattern.id) + '">' +
      escapeHtml(pattern.name) + '</option>';
  }).join('');

  return (
    '<select class="form-control c-select">' +
    '<option selected hidden>compare to:</option>' +
    opts +
    '</select>'
  );
}

function definitionsShowcase(node, dpatterns) {
  if (!node.definitions || !node.definitions.length) {
    return '';
  }

  var options = compareOptions(node, dpatterns);

  return (
    '<div itemscope itemtype="http://schema.org/Table">' +
      '<h4 class="bg-info text-info">Pattern Elements</h4>' +
      '<div>' +
        '<div class="col-xs-12 col-md-6"></div>' +
        '<div class="hidden-sm col-md-6">' + selectHtml(options) + '</div>' +
      '</div>' +
      '<div class="col-xs-12 col-md-6">' +
        '<ul class="list-group">' + definitionItems(node.definitions) + '</ul>' +
      '</div>' +
      '<div class="col-md-6">' +
        '<div class="visible-sm-block">' + selectHtml(options) + '</div>' +
        '<ul class="list-group compare_to"></ul>' +
      '</div>' +
    '</div>'
  );
}

var compareById = new WeakMap();

function compareLookup(node, dpatterns) {
  var byId = {};
  compareOptions(node, dpatterns).forEach(function(pattern) {
    byId[pattern.id] = pattern;
  });
  return byId;
}

function populateCompare(panel, selectedId, byId) {
  var selects = panel.querySelectorAll('select.c-select');
  var compareList = panel.querySelector('.compare_to');
  if (!compareList) {
    return false;
  }

  var pattern = byId && byId[selectedId];
  if (!pattern) {
    return false;
  }

  Array.prototype.forEach.call(selects, function(select) {
    select.value = selectedId;
  });
  compareList.innerHTML = definitionItems(pattern.definitions);
  return true;
}

function bindCompareSelects(panel, node, dpatterns) {
  var byId = compareLookup(node, dpatterns);
  compareById.set(panel, byId);

  var selects = panel.querySelectorAll('select.c-select');
  Array.prototype.forEach.call(selects, function(select) {
    select.addEventListener('change', function() {
      populateCompare(panel, select.value, byId);
    });
  });
}

export function applyCompareTo(panel, selectedId) {
  if (!panel || !selectedId) {
    return false;
  }
  return populateCompare(panel, selectedId, compareById.get(panel));
}

export function renderArticles(container, data) {
  data.gridNodes.forEach(function(node) {
    var panelClass = node.author ? 'panel-primary' : 'panel-info';
    var row = document.createElement('div');
    row.id = node.id;
    row.className = 'row text_box_info';
    row.setAttribute('itemscope', '');
    row.setAttribute('itemtype', 'http://schema.org/WebPageElement');
    row.innerHTML =
      '<div class="panel ' + panelClass + '">' +
        '<div class="panel-heading">' +
          '<h3 class="panel-title" itemprop="headline">' +
            escapeHtml(node.year) + ' ' + escapeHtml(node.name) +
          '</h3>' +
          '<div class="pull-right button_top">' +
            '<a href="#top">' +
              '<span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="panel-body">' +
          '<div itemprop="text">' + articleHtmlFor(node) + '</div>' +
          definitionsShowcase(node, data.dpatterns) +
        '</div>' +
      '</div>';

    bindCompareSelects(row, node, data.dpatterns);
    container.appendChild(row);
  });
}
