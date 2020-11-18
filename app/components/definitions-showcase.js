import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  allPatterns: null,

  availablePatterns: computed('allPatterns', function() {
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
  }),

  selectedPatternId: null,

  selectedPattern: computed('selectedPatternId', function() {
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
  }),

  actions: {

    showSelectedPattern(selectedPatternId) {
      this.set('selectedPatternId', selectedPatternId);
    }   

  }

});
