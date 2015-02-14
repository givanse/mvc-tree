import Ember from 'ember';

export default Ember.Controller.extend({

  sortedNodes: function() {
    // TODO: sort by year
    var p = this.store.all('node-dpattern').toArray();
    var t = this.store.all('node-technology').toArray();
    return p.concat( t );
  }.property()

});
