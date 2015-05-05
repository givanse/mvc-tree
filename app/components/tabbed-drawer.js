import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'section',

  classNames: ['tabbed_drawer'],

  classNameBindings: ['isDrawerShown'],

  attributeBindings: ['itemscope', 'itemtype'],
  itemscope: '',
  itemtype: 'http://schema.org/SiteNavigationElement',

  isDrawerShown: true,  

  actions: {
    toggleDrawer: function() {
      this.toggleProperty('isDrawerShown');
    }
  }
});
