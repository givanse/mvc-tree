import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:svg-environment', 'Unit | Service | svg-environment', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('calcViewBox', function(assert) {
  var service = this.subject({
    colW: 10,
    rowH: 5,
    maxCols: 10,
    maxRows: 10
  });
  
  assert.equal(service.viewBoxW, 100);
  assert.equal(service.viewBoxH, 50);
  assert.equal(service.viewBox, '0 0 100 50');
});
