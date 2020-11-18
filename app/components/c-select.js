import Component from '@ember/component';

export default Component.extend({

  tagName: 'select',

  classNames: ['form-control', 'c-select'],

  options: null,

  selected: null,

  prompt: null,

  //TODO: use closure actions
  change: function() {
    let selected = arguments[0].originalEvent.srcElement.value;
    this.set('selected', selected);
    this.sendAction(selected);
  }

});
