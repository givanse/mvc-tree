// Hash is a DOM id (e.g. #mvp). An optional query after the id opens
// definitions "compare to" (e.g. #mvp?c=mvvm). Also reads ?c= from
// location.search so /?c=mvvm#mvp works after a load rewrite.

function stripPrefix(value, prefix) {
  var text = String(value == null ? '' : value);
  return text.charAt(0) === prefix ? text.slice(1) : text;
}

function queryParam(query, name) {
  if (!query) {
    return '';
  }

  var parts = String(query).split('&');
  for (var i = 0; i < parts.length; i++) {
    var pair = parts[i];
    if (!pair) {
      continue;
    }
    var eq = pair.indexOf('=');
    var key = eq === -1 ? pair : pair.slice(0, eq);
    var value = eq === -1 ? '' : pair.slice(eq + 1);
    try {
      key = decodeURIComponent(key.replace(/\+/g, ' '));
      value = decodeURIComponent(value.replace(/\+/g, ' '));
    } catch (err) {
      // keep raw pair if the URL is malformed
    }
    if (key === name) {
      return value;
    }
  }

  return '';
}

export function parseDeepLink(location) {
  var loc = location || {};
  var hash = stripPrefix(loc.hash, '#');
  var q = hash.indexOf('?');
  var id = q === -1 ? hash : hash.slice(0, q);
  var hashQuery = q === -1 ? '' : hash.slice(q + 1);
  var search = stripPrefix(loc.search, '?');

  return {
    id: id,
    compareTo: queryParam(hashQuery, 'c') || queryParam(search, 'c') || ''
  };
}
