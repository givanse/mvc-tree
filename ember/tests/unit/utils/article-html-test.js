import { module, test } from 'qunit';
import { hbsToHtml } from 'mvc-tree/utils/article-html';
import { articleHtmlFor } from 'mvc-tree/utils/articles';

module('Unit | utils/article-html', function () {
  test('ports link-to-blank to a new-window anchor', function (assert) {
    let html = hbsToHtml(
      "{{link-to-blank 'Models-Views-Controllers' 'papers/Models-Views-Controllers.pdf'}}",
    );
    assert.true(html.includes('href="papers/Models-Views-Controllers.pdf"'));
    assert.true(html.includes('target="_blank"'));
    assert.true(html.includes('Models-Views-Controllers'));
  });

  test('loads TMVE article from app/templates', function (assert) {
    let html = articleHtmlFor({ id: 'tmve', kind: 'dpattern' });
    assert.true(html.includes('Thing-Model-View-Editor'));
    assert.true(html.includes('papers/Thing-Model-View-Editor.pdf'));
  });
});
