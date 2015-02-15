import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      dpatterns: this.store.all('node-dpattern'),
      technologies: this.store.all('node-technology')
    });
  }
});
