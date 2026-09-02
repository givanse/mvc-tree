export function renderNavbar(container, options) {
  var page = (options && options.page) || 'index';
  var aboutActive = page === 'about' ? ' class="active"' : '';

  container.innerHTML =
    '<nav class="navbar navbar-default" itemscope itemtype="http://schema.org/SiteNavigationElement">' +
      '<div class="container-fluid">' +
        '<div class="navbar-header">' +
          '<button type="button" class="navbar-toggle collapsed" data-target="#mvc-navbar-collapse" aria-expanded="false">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
          '</button>' +
          '<a href="/" class="navbar-brand">MVC Family Tree</a>' +
        '</div>' +
        '<div class="collapse navbar-collapse" id="mvc-navbar-collapse">' +
          '<ul class="nav navbar-nav">' +
            '<li' + aboutActive + '>' +
              '<a href="/about/" class="navbar-brand">About</a>' +
            '</li>' +
          '</ul>' +
          '<ul class="nav navbar-nav navbar-right">' +
            '<li>' +
              '<a>' +
                '<iframe src="https://ghbtns.com/github-btn.html?user=givanse&repo=mvc-tree&type=star&count=true&size=large" ' +
                        'frameborder="0" scrolling="0" width="160px" height="30px"></iframe>' +
              '</a>' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';

  var toggle = container.querySelector('.navbar-toggle');
  var collapse = container.querySelector('#mvc-navbar-collapse');
  if (toggle && collapse) {
    toggle.addEventListener('click', function() {
      var open = collapse.classList.toggle('in');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('collapsed', !open);
    });
  }
}

export function renderDrawer(container) {
  container.innerHTML =
    '<section class="tabbed_drawer is-drawer-shown" itemscope itemtype="http://schema.org/SiteNavigationElement">' +
      '<div class="td_tab">' +
        '<span class="glyphicon glyphicon-option-vertical" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="td_drawer">' +
        '<div class="container_view master_overlay_checkbox" id="overlays"></div>' +
      '</div>' +
    '</section>';

  var section = container.querySelector('.tabbed_drawer');
  var tab = container.querySelector('.td_tab');
  tab.addEventListener('click', function() {
    section.classList.toggle('is-drawer-shown');
  });
}
