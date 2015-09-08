import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      dpatterns: this.store.peekAll('node-dpattern'),
      technologies: this.store.peekAll('node-technology'),
      headers: this.store.peekAll('node-header')
    });
  }

});
