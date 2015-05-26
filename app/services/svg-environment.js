import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  showGrid: ENV.APP.showGrid,

  paddingT: 8,
  paddingR: 12,
  paddingB: 8,
  paddingL: 12,

  colW: 170 + 12,
  rowH: 64 + 18,

  maxCols: 6,
  maxRows: 29,

  viewBoxW: null,
  viewBoxH: null,
  viewBox: null,

  yearLineFontSize: 12, // from CSS rule .year_line_txt

  _calcViewBox: function() {
    var viewBoxW = this.get('colW') * this.get('maxCols'),
        viewBoxH = this.get('rowH') * this.get('maxRows');

    this.set('viewBoxW', viewBoxW);
    this.set('viewBoxH', viewBoxH);
    this.set('viewBox', '0 0 ' + viewBoxW + ' ' + viewBoxH);
  }.on('init')

});
