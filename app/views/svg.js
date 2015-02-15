import Ember from 'ember';

export default Ember.View.extend({

  tagName: 'svg',

  elementId: 'mvc_tree',


  templateName: 'svg',

  attributeBindings: ['xmlns',
                      'version', 
                      'width',
                      'height',
                      'viewBox', 
                      'preserveAspectRatio'],
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMinYMin',
  viewBox: null,

  treeConfig: {
    showGrid: true,

    paddingT: 6,
    paddingR: 6,
    paddingB: 12,
    paddingL: 6,

    colW: 160 + 12,
    rowH: 64 + 18,

    maxCols: 7,
    maxRows: 20,

    viewBoxW: null,
    viewBoxH: null,

    yearLineFontSize: 12 // see CSS rules .year_line_txt
  },

  calcViewBox: function() {
    var tc = this.get('treeConfig');
        tc.viewBoxW = tc.colW * tc.maxCols;
        tc.viewBoxH = tc.rowH * tc.maxRows;
    var viewBox = '0 0 ' + tc.viewBoxW + ' ' + tc.viewBoxH;

    this.set('treeConfig', tc);
    this.set('viewBox', viewBox);
  }.observes('treeConfig').on('init'),

  gridLines: function() {
    var tc = this.get('treeConfig'),
        w = tc.viewBoxW,
        h = tc.viewBoxH,
        gridLines = [];

    for (var x = 0; x < w; x += tc.colW) {
      gridLines.push('M' + x + ' 0 V' + h + ' Z');
    }
    for (var y = 0; y < h; y += tc.rowH) {
      gridLines.push('M0 ' + y + ' H' + w + ' Z');
    }

    return gridLines;
  }.property('treeConfig'),

  yearLines: function() {
    var tc = this.get('treeConfig');

    return [
      this._buildYearLine(1980, 2, tc),
      this._buildYearLine(1990, 5, tc),
      this._buildYearLine(2000, 9, tc),
      this._buildYearLine(2010, 13, tc)
    ];
  }.property('treeConfig'),

  _buildYearLine: function(year, row, tc) {
    var x = tc.yearLineFontSize * 2, 
        y = row * tc.rowH,
        xLine = tc.yearLineFontSize * 4;

    return {year: year, x: x, y: y,
            path: 'M'+xLine+' '+y+' H' + tc.viewBoxW};
  }
});
