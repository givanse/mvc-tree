import Ember from 'ember';

export default Ember.View.extend({
  name: null,
  overlayClassName: null,
  checked: false,
  isMaster: false,
    
  tagName: 'div',
  templateName: 'overlay-checkbox',
  classNames: ['overlay_checkbox'],
  classNameBindings: ['checked:overlay_enabled'],

  click: function() {
    var checked = ! this.get('checked');
    this.set('checked', checked);

    if ( this.get('isMaster') ) {
      this.get('parentView').send('toggleAll', checked);
    } else {
      return false;
    }
  },

  checkedObserver: function() {
    var checked =  this.get('checked');
    this.toggleOverlay(checked);
  }.observes('checked'),

  toggleOverlay: function(isChecked) {
    var overlayClassName = this.get('overlayClassName'),
        svgElements = Ember.$('.'+overlayClassName);

    if ( svgElements.length < 1 ) {
      return;
    }

    var elemsClassNames = svgElements.attr('class');

    elemsClassNames = isChecked ?
                      elemsClassNames.replace(/hidden/, '') :
                      elemsClassNames + ' hidden';

    svgElements.attr('class', elemsClassNames);
  },

  didInsertElement: function() {
    // like doing a trigger on(init), but after the elements have been inserted,
    // otherwise none is found and the CSS class is not applied properly
    this.checkedObserver();
  }

});
