import Component from '@ember/component';

export default Component.extend({

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
