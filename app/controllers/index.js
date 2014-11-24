import Ember from 'ember';

export default Ember.Controller.extend({

  allNodes: function() {
    // TODO: sort by year
    var p = this.store.all('pattern').toArray();
    var t = this.store.all('technology').toArray();
    return p.concat( t );
  }.property()

});
