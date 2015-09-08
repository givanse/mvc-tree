import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    let rowDividers = [
      {year: 1980, row: 3},
      {year: 1990, row: 6},
      {year: 2000, row: 15},
      {year: 2010, row: 25}
    ];

    return Ember.RSVP.hash({
      dpatterns: this.store.peekAll('node-dpattern'),
      technologies: this.store.peekAll('node-technology'),
      headers: this.store.peekAll('node-header'),
      rowDividers: rowDividers
    });
  }

});
