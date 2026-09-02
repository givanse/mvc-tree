import {
  patternSources,
  technologySources,
} from 'virtual:encyclopedia-articles';
import { hbsToHtml } from './article-html';

export const patternArticles = Object.fromEntries(
  Object.entries(patternSources).map(([id, source]) => [id, hbsToHtml(source)]),
);

export const technologyArticles = Object.fromEntries(
  Object.entries(technologySources).map(([id, source]) => [
    id,
    hbsToHtml(source),
  ]),
);

export function articleHtmlFor(node) {
  if (!node) {
    return '';
  }

  if (node.kind === 'dpattern') {
    return patternArticles[node.id] || '';
  }

  return technologyArticles[node.id] || '';
}
