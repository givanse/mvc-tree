import Ember from 'ember';
import ENV from '../config/environment';
import { DEFAULT_SVG_ENV, calcViewBox } from '../lib/svg-layout/environment';

export default Ember.Service.extend({

  showGrid: ENV.APP.showGrid,

  paddingT: DEFAULT_SVG_ENV.paddingT,
  paddingR: DEFAULT_SVG_ENV.paddingR,
  paddingB: DEFAULT_SVG_ENV.paddingB,
  paddingL: DEFAULT_SVG_ENV.paddingL,

  colW: DEFAULT_SVG_ENV.colW,
  rowH: DEFAULT_SVG_ENV.rowH,

  maxCols: DEFAULT_SVG_ENV.maxCols,
  maxRows: DEFAULT_SVG_ENV.maxRows,

  viewBoxW: null,
  viewBoxH: null,
  viewBox: null,

  yearLineFontSize: DEFAULT_SVG_ENV.yearLineFontSize,

  _calcViewBox: Ember.on('init', function() {
    var box = calcViewBox(
      this.get('colW'),
      this.get('rowH'),
      this.get('maxCols'),
      this.get('maxRows')
    );

    this.set('viewBoxW', box.viewBoxW);
    this.set('viewBoxH', box.viewBoxH);
    this.set('viewBox', box.viewBox);
  })

});
