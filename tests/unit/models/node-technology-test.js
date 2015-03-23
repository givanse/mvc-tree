import Ember from 'ember';

import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('node-technology', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject({ svgenv: Ember.Object.create()});
  // var store = this.store();
  assert.ok(!!model);
});
