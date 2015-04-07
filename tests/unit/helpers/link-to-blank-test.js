import {
  linkToBlank
} from '../../../helpers/link-to-blank';
import { module, test } from 'qunit';

module('helper:link-to-blank');

test('it works', function(assert) {
  var result = linkToBlank([42, 42]);
  assert.ok(result);
});

test('example link', function(assert) {
  var result = linkToBlank(['example', 'http://example.org']);
  var expected = '<a target=\"_blank\" href=\"http://example.org\">example' + 
                 '<sup><span class=\"glyphicon glyphicon-new-window\" aria-hidden=\"true\"></span></sup>' +
                 '</a>';
  assert.equal(result, expected);
});
