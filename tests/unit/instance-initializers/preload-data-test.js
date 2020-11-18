import Application from '@ember/application';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import { module, test } from 'qunit';

let pushCalledCount = 0;

const storeStub = Service.extend({
  push: function() {
    pushCalledCount++;
  }
});

module('Unit | Instance Initializer | preload data', function(hooks) {
  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.application.register('service:store', storeStub);
      this.appInstance = this.application.buildInstance();
    });
  });

  hooks.afterEach(function() {
    run(this.appInstance, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', function(assert) {
    assert.equal(pushCalledCount, 4);
  });
});
