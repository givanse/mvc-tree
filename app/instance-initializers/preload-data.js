import fixtureC from '../jsons/columns';
import fixtureH from '../jsons/headers';
import fixtureT from '../jsons/technologies';
import fixtureP from '../jsons/dpatterns';

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
