import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('route:about', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    var route = this.owner.lookup('route:about');
    assert.ok(route);
  });
});
