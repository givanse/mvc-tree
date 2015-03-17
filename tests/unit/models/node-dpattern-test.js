import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('node-dpattern', {
  // Specify the other units that are required for this test.
  needs: ['model:grid-node']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
