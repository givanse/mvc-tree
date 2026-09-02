import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { renderNavbar, renderDrawer } from './chrome.js';
import { loadTreeData } from './data.js';
import { renderSvg } from './render-svg.js';
import { renderArticles } from './render-articles.js';
import { renderOverlayCheckboxes } from './overlays.js';

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

if (window.location.hash) {
  var panel = document.getElementById(window.location.hash.slice(1));
  if (panel && typeof panel.scrollIntoView === 'function') {
    panel.scrollIntoView();
  }
}
