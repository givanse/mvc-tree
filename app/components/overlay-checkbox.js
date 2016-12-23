import Ember from 'ember';

export default Ember.Component.extend({
  //TODO: can be rendered either as name or view.name
  //Views deprecation leftover?
  name: null,
  overlayClassName: null,
  isMaster: false,
    
  tagName: 'div',
  classNames: ['overlay_checkbox'],

  classNameBindings: ['checked'],
  checked: false,

  attributeBindings: ['itemscope', 'itemtype'],
  itemscope: '',
  itemtype: 'http://schema.org/SiteNavigationElement',

  checkboxEventBus: Ember.inject.service(),

  click: function() {
    let checked = !this.get('checked');
    this.set('checked', checked);

    let checkboxEventBus = this.get('checkboxEventBus');
    if (this.get('isMaster')) {
      checkboxEventBus.toggleAll(checked);
    } else {
      checkboxEventBus.setMasterUnchecked();
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

  init: function() {
    this._super(...arguments);
    let checkboxEventBus = this.get('checkboxEventBus');
    if (this.get('isMaster')) {
      checkboxEventBus.registerMasterCheckbox(this);
    } else {
      checkboxEventBus.registerCheckbox(this);
    }
  },

  didInsertElement: function() {
    this._super(...arguments);
    // after the elements have been inserted,
    // otherwise none is found and the CSS class is not applied properly
    this.checkedObserver();
  }

});
