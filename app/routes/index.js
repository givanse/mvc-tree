import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      patterns: this.store.all('node-dpattern'),
      techs: this.store.all('node-technology')
    };
  }
});
