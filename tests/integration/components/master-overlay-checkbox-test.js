import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | master overlay checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    await render(hbs`{{master-overlay-checkbox}}`);

    let expectedTextRegex = /^All\W*Historical\W*Significant\W*Java\W*JavaScript\W*Microsoft\W*PHP\W*Python\W*Ruby\W*Smalltalk$/;
    let text = find('*').textContent.trim(); 

    assert.equal(text.match(expectedTextRegex).length, 1);
  });
});
