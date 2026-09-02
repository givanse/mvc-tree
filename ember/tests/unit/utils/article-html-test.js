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

  test('loads Ember 2.0 and React articles from app/templates', function (assert) {
    let ember2 = articleHtmlFor({ id: 'ember-2', kind: 'technology' });
    assert.true(ember2.includes('Road to Ember 2.0 RFC'));
    assert.true(
      ember2.includes(
        'https://github.com/emberjs/rfcs/blob/master/text/0015-the-road-to-ember-2-0.md#onward',
      ),
    );

    let react = articleHtmlFor({ id: 'react', kind: 'technology' });
    assert.true(react.includes('open sourced by Facebook in 2013'));
    assert.true(react.includes('virtual DOM'));
  });
});
