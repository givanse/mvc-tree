import Ember from 'ember';

export default Ember.Component.extend({

  availablePatterns: function() {
    var currPatternId = this.get('currPatternId'), 
        allPatterns = this.get('allPatterns');

    return allPatterns.filter(function(pattern) {
      return pattern.id === currPatternId ? false : true;
    }).toArray();
  }.property(),

  selectedPatternId: null,

  selectedPattern: function() {
    var selectedPatternId = this.get('selectedPatternId'); 

    if ( ! selectedPatternId ) {
      return null;
    }

    var availablePatterns = this.get('availablePatterns');

    for (var i = 0; availablePatterns.length; i++) {
      var pattern = availablePatterns[i];
      if ( pattern.id === selectedPatternId ) {
        return pattern;
      }
    }

    return null;
  }.property('selectedPatternId')

});
