import Ember from 'ember';

export default Ember.Controller.extend({

  /*
   * All the grid nodes sorted by date.
   */
  gridNodes: Ember.computed('model', {
    get: function() {
      // sortBy() returns Array
      var pArr = this.get('model.dpatterns').sortBy('year'), 
          tArr = this.get('model.technologies').sortBy('year');

      var gridNodes = pArr.concat( tArr ).sort(function(nodeA, nodeB) {
        var a = nodeA.get('year');
        var b = nodeB.get('year');
        if ( a < b ) {
          return -1;
        }
        if ( a > b ) {
          return 1;
        }
        return 0;
      });

      return gridNodes;
    }
  })

});
