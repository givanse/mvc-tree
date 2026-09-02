import Ember from 'ember';
import { getBorderPos } from '../lib/svg-layout/coordinates';

export default Ember.Mixin.create({

  getBorderPos: function(gridNode, options) {
    return getBorderPos(this.get('svgenv'), gridNode, options);
  }

});
