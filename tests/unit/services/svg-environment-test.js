import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | svg-environment', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    var service = this.owner.lookup('service:svg-environment');
    assert.ok(service);
  });

  test('calcViewBox', function(assert) {
    var service = this.owner.factoryFor('service:svg-environment').create({
      colW: 10,
      rowH: 5,
      maxCols: 10,
      maxRows: 10
    });
    
    assert.equal(service.viewBoxW, 100);
    assert.equal(service.viewBoxH, 50);
    assert.equal(service.viewBox, '0 0 100 50');
  });
});
