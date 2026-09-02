export var CHECKBOXES_LIST = [
  { name: 'Historical', overlayClassName: 'tech_hist', checked: true },
  { name: 'Significant', overlayClassName: 'tech_sig', checked: true },
  { name: 'Java', overlayClassName: 'tech_java', checked: false },
  { name: 'JavaScript', overlayClassName: 'tech_js', checked: true },
  { name: 'Microsoft', overlayClassName: 'tech_ms', checked: true },
  { name: 'PHP', overlayClassName: 'tech_php', checked: false },
  { name: 'Python', overlayClassName: 'tech_python', checked: false },
  { name: 'Ruby', overlayClassName: 'tech_ruby', checked: false },
  { name: 'Smalltalk', overlayClassName: 'tech_smalltalk', checked: true }
];

function setHidden(svg, overlayClassName, isChecked) {
  var nodes = svg.querySelectorAll('.' + overlayClassName);
  Array.prototype.forEach.call(nodes, function(node) {
    node.classList.toggle('hidden', !isChecked);
  });
}

export function applyOverlayState(svg, overlayClassName, isChecked) {
  setHidden(svg, overlayClassName, isChecked);
}

export function applyAllOverlayDefaults(svg, checkboxes) {
  (checkboxes || CHECKBOXES_LIST).forEach(function(item) {
    applyOverlayState(svg, item.overlayClassName, item.checked);
  });
}

export function renderOverlayCheckboxes(container, svg) {
  var master = document.createElement('div');
  master.className = 'overlay_checkbox';
  master.setAttribute('data-overlay-master', 'true');
  master.setAttribute('itemscope', '');
  master.setAttribute('itemtype', 'http://schema.org/SiteNavigationElement');
  master.textContent = 'All';
  container.appendChild(master);

  var boxes = CHECKBOXES_LIST.map(function(item) {
    var el = document.createElement('div');
    el.className = 'overlay_checkbox' + (item.checked ? ' checked' : '');
    el.setAttribute('data-overlay', item.overlayClassName);
    el.setAttribute('itemscope', '');
    el.setAttribute('itemtype', 'http://schema.org/SiteNavigationElement');
    el.textContent = item.name;
    el._checked = item.checked;
    container.appendChild(el);
    return el;
  });

  function setBoxChecked(el, checked) {
    el._checked = checked;
    el.classList.toggle('checked', checked);
    applyOverlayState(svg, el.getAttribute('data-overlay'), checked);
  }

  master.addEventListener('click', function() {
    var checked = !master.classList.contains('checked');
    master.classList.toggle('checked', checked);
    boxes.forEach(function(el) {
      setBoxChecked(el, checked);
    });
  });

  boxes.forEach(function(el) {
    el.addEventListener('click', function() {
      master.classList.remove('checked');
      setBoxChecked(el, !el._checked);
    });
  });

  applyAllOverlayDefaults(svg, CHECKBOXES_LIST);
}
