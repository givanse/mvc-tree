import Ember from 'ember';
import CoordinatesFactory from './coordinates-factory';
import {
  calcHDir,
  calcVDir,
  calcHDelta,
  calcVDelta,
  genHPathP2C,
  genHPathC2Ch,
  genVPathN2C,
  genVPathC2N,
  genPathC2C,
  getHMultC2C,
  getVMultC2C,
  genPathC2CR,
  genChildArrow,
  generatePathToChild,
  orderNodes,
  generateBindingPath
} from '../lib/svg-layout/path-factory';

/* Thin Ember wrapper. Math lives in app/lib/svg-layout (no Ember imports). */
export default Ember.Mixin.create(CoordinatesFactory, {

  _calcHDir: calcHDir,
  _calcVDir: calcVDir,
  _calcHDelta: calcHDelta,
  _calcVDelta: calcVDelta,
  _getHMultC2C: getHMultC2C,
  _getVMultC2C: getVMultC2C,
  _orderNodes: orderNodes,

  _genHPathP2C: function(hDelta, vDelta) {
    return genHPathP2C(this.get('svgenv'), hDelta, vDelta);
  },

  _genHPathC2Ch: function(hDelta, vDelta) {
    return genHPathC2Ch(this.get('svgenv'), hDelta, vDelta);
  },

  _genVPathN2C: function(hDelta, vDelta) {
    return genVPathN2C(this.get('svgenv'), hDelta, vDelta);
  },

  _genVPathC2N: function(hDelta, vDelta) {
    return genVPathC2N(this.get('svgenv'), hDelta, vDelta);
  },

  _genPathC2C: function(col1, row1, col2, row2) {
    return genPathC2C(this.get('svgenv'), col1, row1, col2, row2);
  },

  _genPathC2CR: function(hDelta, vDelta) {
    return genPathC2CR(this.get('svgenv'), hDelta, vDelta);
  },

  _genChildArrow: function() {
    return genChildArrow(this.get('svgenv'));
  },

  generatePathToChild: function(a, b) {
    return generatePathToChild(this.get('svgenv'), a, b);
  },

  generateBindingPath: function(a, b) {
    return generateBindingPath(this.get('svgenv'), a, b);
  }

});
