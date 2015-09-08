import Ember from 'ember';
//import { initialize } from '../../../app/instance-initializers/preload-data';
import { initialize } from 'mvc-tree/instance-initializers/preload-data';
import { module, test } from 'qunit';
import SvgEnvironment from '../../../services/svg-environment';
import GridNode from 'mvc-tree/models/grid-node';
import NodeDPattern from 'mvc-tree/models/node-dpattern';
import NodeTechnology from 'mvc-tree/models/node-technology';
import NodeHeader from 'mvc-tree/models/node-header';
import Column from 'mvc-tree/models/column';

var container, application;

module('Integration | Instance Initializer | preload-data', {
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
      container._registry.register('model:column', Column);
    });
  }
});

test('it works', function(assert) {
  Ember.run(function() {
    initialize(application.__deprecatedInstance__);
  });

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
