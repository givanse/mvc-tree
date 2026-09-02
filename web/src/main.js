import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { renderNavbar, renderDrawer } from './chrome.js';
import { loadTreeData } from './data.js';
import { renderSvg } from './render-svg.js';
import { renderArticles, applyCompareTo } from './render-articles.js';
import { renderOverlayCheckboxes } from './overlays.js';
import { parseDeepLink } from '../../app/lib/deep-link.js';

renderNavbar(document.getElementById('site-nav'), { page: 'index' });

var app = document.getElementById('app');
app.innerHTML =
  '<div id="drawer-root"></div>' +
  '<div class="mvc_tree_wrapper_scroll">' +
    '<div class="mvc_tree_wrapper" id="tree-mount"></div>' +
  '</div>' +
  '<br>' +
  '<div class="container" id="articles"></div>';

renderDrawer(document.getElementById('drawer-root'));

var data = loadTreeData();
var svg = renderSvg(document.getElementById('tree-mount'), data);
renderArticles(document.getElementById('articles'), data);
renderOverlayCheckboxes(document.getElementById('overlays'), svg);

var deepLink = parseDeepLink(window.location);
if (deepLink.id) {
  var panel = document.getElementById(deepLink.id);
  if (panel && typeof panel.scrollIntoView === 'function') {
    panel.scrollIntoView();
  }
  if (deepLink.compareTo) {
    applyCompareTo(panel, deepLink.compareTo);
  }
}
