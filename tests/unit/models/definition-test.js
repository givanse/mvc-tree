import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('definition', 'Definition', {
  // Specify the other units that are required for this test.
  needs: ['model:pattern']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
