// Convert encyclopedia Handlebars partials (mostly <p> + {{link-to-blank}})
// into HTML. Source of truth remains app/templates/{dpatterns,technologies}/*.hbs.

var LINK_RE = /\{\{link-to-blank\s+(['"])((?:\\.|(?!\1)[\s\S])*?)\1\s+(['"])((?:\\.|(?!\3)[\s\S])*?)\3\s*\}\}/g;

function unescapeHbs(value) {
  return value.replace(/\\(['"\\])/g, '$1');
}

function renderLink(text, url) {
  return (
    '<a target="_blank" href="' + url + '">' +
    text +
    '<sup><span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></sup>' +
    '</a>'
  );
}

export function hbsToHtml(source) {
  if (!source) {
    return '';
  }

  return source.replace(LINK_RE, function(_match, _q1, text, _q2, url) {
    return renderLink(unescapeHbs(text), unescapeHbs(url));
  });
}

export function articlesFromGlob(glob) {
  var articles = {};

  Object.keys(glob).forEach(function(path) {
    var id = path.replace(/^.*\//, '').replace(/\.hbs$/, '');
    articles[id] = hbsToHtml(glob[path]);
  });

  return articles;
}
