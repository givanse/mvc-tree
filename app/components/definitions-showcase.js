import Ember from 'ember';

export default Ember.Component.extend({

  allPatterns: null,

  availablePatterns: function() {
    var currPatternId = this.get('currPatternId'), 
        allPatterns = this.get('allPatterns');

    if ( ! allPatterns ) {
      return null;
    }

    return allPatterns.filter(function(pattern) {
      if ( pattern.id === currPatternId ||
           ! pattern.get('definitions') ) {
        return false;
      }

      return true;
    }).sortBy('name').toArray();
  }.property('allPatterns'),

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
