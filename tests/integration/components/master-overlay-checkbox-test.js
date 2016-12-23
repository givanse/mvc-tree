import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('master-overlay-checkbox', 'Integration | Component | master overlay checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{master-overlay-checkbox}}`);

  let expectedTextRegex = /^All\W*Historical\W*Significant\W*Java\W*JavaScript\W*Microsoft\W*PHP\W*Python\W*Ruby\W*Smalltalk$/;
  let text = this.$().text().trim(); 

  assert.equal(text.match(expectedTextRegex).length, 1);
});
