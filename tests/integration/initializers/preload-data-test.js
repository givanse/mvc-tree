import Ember from 'ember';
import { initialize } from '../../../initializers/preload-data';
import { module, test } from 'qunit';
import SvgEnvironment from '../../../services/svg-environment';
import GridNode from 'mvctree/models/grid-node';
import NodeDPattern from 'mvctree/models/node-dpattern';
import NodeTechnology from 'mvctree/models/node-technology';
import NodeHeader from 'mvctree/models/node-header';

var container, application;

module('initializer:preload-data', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
      
      container._registry.register('service:svg-environment', SvgEnvironment);
      container._registry.register('model:grid-node', GridNode);
      container._registry.register('model:node-dpattern', NodeDPattern);
      container._registry.register('model:node-technology', NodeTechnology);
      container._registry.register('model:node-header', NodeHeader);
    });
  }
});

test('it works', function(assert) {
  Ember.run(function() {
    initialize(container, application);
  });

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

