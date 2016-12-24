import Ember from 'ember';
import { initialize } from 'mvc-tree/instance-initializers/preload-data';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

let pushCalledCount = 0;

const storeStub = Ember.Service.extend({
  push: function() {
    pushCalledCount++;
  }
});

module('Unit | Instance Initializer | preload data', {

  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.register('service:store', storeStub);
      this.appInstance = this.application.buildInstance();
    });
  },

  afterEach() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }

});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.appInstance);

  assert.equal(pushCalledCount, 4);
});
