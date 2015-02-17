import Ember from 'ember';

export default Ember.Object.extend({
  showGrid: false,

  paddingT: 6,
  paddingR: 6,
  paddingB: 12,
  paddingL: 6,

  colW: 170 + 12,
  rowH: 64 + 18,

  maxCols: 7,
  maxRows: 20,

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
