import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('overlay-checkbox', 'Integration | Component | overlay checkbox', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{overlay-checkbox name='hello'}}`);

  assert.equal(this.$().text().trim(), 'hello');
});
