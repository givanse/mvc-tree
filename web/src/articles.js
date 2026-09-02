import { articlesFromGlob } from './hbs.js';

var patternGlob = import.meta.glob('../../app/templates/dpatterns/*.hbs', {
  query: '?raw',
  import: 'default',
  eager: true
});

var techGlob = import.meta.glob('../../app/templates/technologies/*.hbs', {
  query: '?raw',
  import: 'default',
  eager: true
});

export var patternArticles = articlesFromGlob(patternGlob);
export var technologyArticles = articlesFromGlob(techGlob);

export function articleHtmlFor(node) {
  if (!node) {
    return '';
  }

  if (node.kind === 'dpattern') {
    return patternArticles[node.id] || '';
  }

  return technologyArticles[node.id] || '';
}
