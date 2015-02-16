import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'section',

  classNames: ['tabbed_drawer'],

  classNameBindings: ['isDrawerShown'],

  isDrawerShown: true,  

  actions: {
    toggleDrawer: function() {
      this.toggleProperty('isDrawerShown');
    }
  }
});
