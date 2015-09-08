import fixtureC from '../jsons/columns';
import fixtureH from '../jsons/node-headers';
import fixtureT from '../jsons/node-technologies';
import fixtureP from '../jsons/node-dpatterns';

export function initialize(instance) {
  var store = instance.container.lookup('service:store');

  store.push(fixtureC);
  store.push(fixtureH);

  store.push(fixtureT);
  store.push(fixtureP);
}

export default {
  name: 'preload-data',
  after: ['ember-data'], 
  initialize: initialize 
};
