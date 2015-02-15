import Ember from 'ember';

/*
  Provides convinient methods that convert col,row positions to x,y coordinates
  for the SVG root.
*/
export default Ember.Mixin.create({

  treeConfig: {
    paddingT: 0,
    paddingR: 0,
    paddingB: 0,
    paddingL: 0
  },

  // center of a grid's square/rectangle
  cx: null,
  cy: null,

  width: null,
  height: null,

  rx: null,
  ry: null,

  // x position that takes into account padding
  x: null,
  y: null,

  _x: function() {
    var tc = this.get('treeConfig'),
        col = this.get('elem.col'),
        x = col * tc.colW;

    this.set('cx', x + (tc.colW / 2) );
    var width = tc.colW - tc.paddingL - tc.paddingR;
    this.set('width', width);
    this.set('rx', width/2);
    this.set('x', tc.paddingL + x);
  }.observes('elem.col').on('init'),

  _y: function() {
    var tc = this.get('treeConfig'),
        row = this.get('elem.row'),
        y = row * tc.rowH;

    this.set('cy', y + (tc.rowH / 2) );
    var height = tc.rowH - tc.paddingT - tc.paddingB;
    this.set('height', height);
    this.set('ry', height/2);
    this.set('y', tc.paddingT + y);
  }.observes('elem.row').on('init'),

});
