import fixtureT from '../jsons/technologies';
import fixtureP from '../jsons/dpatterns';
import fixtureH from '../jsons/headers';

// TODO: Fix deprecation in Ember 1.11
// DEPRECATION: register should be called on the registry instead of the container
// https://github.com/ember-cli/ember-cli/issues/3159

export function initialize(container/*, application */) {
  var store = container.lookup('store:main');

  fixtureP.forEach(function(item) {
    item.template = 'dpatterns/' + item.id;
    store.push('node-dpattern', item);
  });

  fixtureT.forEach(function(item) {
    item.template = 'technologies/' + item.id;
    store.push('node-technology', item);
  });

  fixtureH.forEach(function(item) {
    store.push('node-header', item);
  });
}

export default {
  name: 'preload-data',
  after: 'ember-data',
  initialize: initialize 
};

