import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      patterns: this.store.all('pattern'),
      techs: this.store.all('technology')
    };
  }
});
