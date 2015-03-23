import Ember from 'ember';
import { initialize } from '../../../initializers/preload-data';
import { module, test } from 'qunit';
import GridNode from 'mvctree/models/grid-node';
import NodeDPattern from 'mvctree/models/node-dpattern';
import NodeTechnology from 'mvctree/models/node-technology';
import NodeHeader from 'mvctree/models/node-header';
import SvgEnvironmentService from '../../../initializers/svg-environment-service';
import SvgEnvironment from '../../../services/svg-environment';

var container, application;

module('initializer:preload-data', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();

      container.register('model:grid-node', GridNode);
      container.register('model:node-dpattern', NodeDPattern);
      container.register('model:node-technology', NodeTechnology);
      container.register('model:node-header', NodeHeader);

      container.register('service:svg-environment', SvgEnvironment);
      SvgEnvironmentService.initialize(container, application);
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

