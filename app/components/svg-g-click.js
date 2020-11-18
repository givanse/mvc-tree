import $ from 'jquery';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import googlePageview from '../mixins/google-pageview';
var ga = EmberObject.extend(googlePageview).create();

/*
  The main objective of this SVG group is to make it easier 
  to handle click events.
*/
export default Component.extend({

  tagName: 'g',

  layoutName: null,

  init: function() {
    this._super(...arguments);

    // warning: we are overriding the classNames property
    this.set('classNames', ['ember-view', 'g_' + this.get('node.id')]);
  },

  classNameBindings: ['classNameTech'],

  _$html_body: $('html, body'),

  click: function() {
    var nodeId = this.get('node.id');

    this._$html_body.animate({
      scrollTop: $('#' + nodeId).offset().top
    }, 700);

    //TODO: revisit hashbang anchor support in Ember
    window.location.hash = nodeId;

    ga.pageviewToGA(window.location.href, nodeId);
  }

});
