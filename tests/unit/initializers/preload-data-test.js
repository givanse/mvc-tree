import Ember from 'ember';
import { initialize } from 'mvctree/initializers/preload-data';
import Pattern from 'mvctree/models/pattern';
import Technology from 'mvctree/models/technology';

var container, application;

module('PreloadDataInitializer', {
  setup: function() {
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
test('it works', function() {
  Ember.run(function() {
    initialize(container, application);
  });

  // you would normally confirm the results of the initializer here
  ok(true);
});

