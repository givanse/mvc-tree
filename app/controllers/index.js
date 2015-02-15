import Ember from 'ember';

export default Ember.Controller.extend({

  sortedNodes: function() {
    var model = this.get('model'),
        // sortBy turns them into arrays too
        p = model.dpatterns.sortBy('year'),
        t = model.technologies.sortBy('year');

    return p.concat( t ).sort(function(a, b) {
      a = a.get('year');
      b = b.get('year');
      if ( a < b ) {
        return -1;
      }
      if ( a > b ) {
        return 1;
      }
      return 0;
    });
  }.property('model')

});
