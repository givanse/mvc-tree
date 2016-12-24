import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'select',

  classNames: ['form-control', 'c-select'],

  options: null,

  selected: null,
  
  prompt: null,

  change: function() {
    let selected = arguments[0].originalEvent.srcElement.value; 
    this.set('selected', selected);
    this.sendAction(selected);
  }

});
