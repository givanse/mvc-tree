import Ember from 'ember';
import TreeNode from '../mixins/tree-node';

/*
  The main objective of this SVG group is to make it easier to handle click events.
*/
export default Ember.View.extend(TreeNode, {
  tagName: 'g',

  classNameBindings: ['classNameTech'],

  click: function() {
    var elemId = this.get('elem.id');

    //TODO: cache selector
    Ember.$('html, body').animate({
      scrollTop: Ember.$('#' + elemId).offset().top
    }, 300);

    //TODO: revisit hashbang anchor support in Ember
    window.location.hash = elemId;
  }
});
