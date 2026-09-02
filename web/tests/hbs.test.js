import { describe, expect, it } from 'vitest';
import { hbsToHtml } from '../src/hbs.js';

describe('hbsToHtml', function() {
  it('converts a single-line link-to-blank helper', function() {
    var html = hbsToHtml(
      "{{link-to-blank 'Models-Views-Controllers' 'papers/Models-Views-Controllers.pdf'}}"
    );
    expect(html).toContain('href="papers/Models-Views-Controllers.pdf"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('Models-Views-Controllers');
    expect(html).toContain('glyphicon-new-window');
  });

  it('converts a multiline helper and escaped quotes', function() {
    var html = hbsToHtml(
      "{{link-to-blank 'A note on Dynabook requirements'\n" +
      "                'papers/A_note_on_Dynabook_requirements.pdf'}}\n" +
      "{{link-to-blank 'Interface Builder\\'s Alternative Lisp timeline' 'http://example.com/'}}"
    );
    expect(html).toContain('papers/A_note_on_Dynabook_requirements.pdf');
    expect(html).toContain("Interface Builder's Alternative Lisp timeline");
  });

  it('loads Ember 2.0 and React encyclopedia articles', async function() {
    var articles = await import('../src/articles.js');
    var ember2 = articles.articleHtmlFor({ id: 'ember-2', kind: 'technology' });
    var react = articles.articleHtmlFor({ id: 'react', kind: 'technology' });

    expect(ember2).toContain('Road to Ember 2.0 RFC');
    expect(ember2).toContain(
      'https://github.com/emberjs/rfcs/blob/master/text/0015-the-road-to-ember-2-0.md#onward'
    );
    expect(react).toContain('open sourced by Facebook in 2013');
    expect(react).toContain('virtual DOM');
  });

  it('converts double-quoted helper text', function() {
    var html = hbsToHtml(
      '{{link-to-blank "Ian\'s Dolphin Smalltalk Pages" \'http://www.idb.me.uk/idb/about.html\'}}'
    );
    expect(html).toContain("Ian's Dolphin Smalltalk Pages");
  });
});
