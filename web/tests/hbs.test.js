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

  it('converts double-quoted helper text', function() {
    var html = hbsToHtml(
      '{{link-to-blank "Ian\'s Dolphin Smalltalk Pages" \'http://www.idb.me.uk/idb/about.html\'}}'
    );
    expect(html).toContain("Ian's Dolphin Smalltalk Pages");
  });
});
