import Ember from 'ember';
import { initialize } from '../../../initializers/preload-data';
import { module, test } from 'qunit';
import Pattern from 'mvctree/models/pattern';
import Technology from 'mvctree/models/technology';

var container, application;

module('PreloadDataInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();

      container.register('model:pattern', Pattern);
      container.register('model:technology', Technology);
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  Ember.run(function() {
    initialize(container, application);
  });

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

