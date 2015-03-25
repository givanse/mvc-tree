import Ember from 'ember';

export default Ember.View.extend({
  name: null,
  overlayClassName: null,
  isMaster: false,
    
  tagName: 'div',
  templateName: 'overlay-checkbox',
  classNames: ['overlay_checkbox'],

  classNameBindings: ['checked'],
  checked: false,

  click: function() {
    var checked = ! this.get('checked');
    this.set('checked', checked);

    if ( this.get('isMaster') ) {
      this.get('parentView').send('toggleAll', checked);
    } else {
      this.get('parentView').send('setMasterUnchecked');
    }
  },

  checkedObserver: function() {
    var checked =  this.get('checked');
    this._toggleOverlay(checked);
  }.observes('checked'),

  _toggleOverlay: function(isChecked) {
    var overlayClassName = this.get('overlayClassName');

    var svgElements$ = Ember.$('.'+overlayClassName);

    if ( svgElements$.length < 1 ) {
      return;
    }

    svgElements$.each(function(index, svgItem) {
      var svgItem$ = Ember.$(svgItem);
      var classes = svgItem$.attr('class');

      classes = isChecked ? classes.replace(/hidden/, '') :
                            classes + ' hidden';
      // last time I checked toggleClass(), and similar, do not
      // work well with SVGs, attr() always works.
      svgItem$.attr('class', classes);
    });
  },

  didInsertElement: function() {
    // like listening to on('init'), but after the elements have been inserted,
    // otherwise none is found and the CSS class is not applied properly
    this.checkedObserver();
  }

});
