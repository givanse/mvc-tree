import Ember from 'ember';
import TreeNode from '../mixins/tree-node';

/*
  The main objective of this SVG group is to make it easier 
  to handle click events.
*/
export default Ember.View.extend(TreeNode, {

  tagName: 'g',

  _classNames: function() {
    // warning: we are overriding the classNames property
    this.set('classNames', ['ember-view', 'g_' + this.get('elem.id')]);
  }.on('init'),

  classNameBindings: ['classNameTech'],

  _$html_body: Ember.$('html, body'),

  click: function() {
    var elemId = this.get('elem.id');

    this._$html_body.animate({
      scrollTop: Ember.$('#' + elemId).offset().top
    }, 700);

    //TODO: revisit hashbang anchor support in Ember
    window.location.hash = elemId;
  }
});
