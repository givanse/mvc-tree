import Ember from 'ember';
import googlePageview from '../mixins/google-pageview';
var ga = Ember.Object.extend(googlePageview).create();

/*
  The main objective of this SVG group is to make it easier 
  to handle click events.
*/
export default Ember.Component.extend({

  tagName: 'g',

  _classNames: function() {
    // warning: we are overriding the classNames property
    this.set('classNames', ['ember-view', 'g_' + this.get('node.id')]);
  }.on('init'),

  classNameBindings: ['classNameTech'],

  _$html_body: Ember.$('html, body'),

  click: function() {
    var nodeId = this.get('node.id');

    this._$html_body.animate({
      scrollTop: Ember.$('#' + nodeId).offset().top
    }, 700);

    //TODO: revisit hashbang anchor support in Ember
    window.location.hash = nodeId;
    ga.pageviewToGA(window.location.href, nodeId);
  },

});
