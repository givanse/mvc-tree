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

  treeConfig: {
    showGrid: true,

    paddingL: 12,
    paddingR: 12,
    paddingT: 12,
    paddingB: 12,

    colW: 130 + 24,
    rowH: 64 + 20,

    maxCols: 7,
    maxRows: 20,

    viewBoxW: 800,
    viewBoxH: 1600
  },
  viewBox: '0 0 800 1600',

  gridLines: function() {
    var tc = this.treeConfig,
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
  }.property(),

  yearLines: function() {
    var tc = this.treeConfig;

    function buildYearLine(year, row) {
      var x = tc.paddingL, 
          y = row * tc.rowH,
          xLine = x + tc.paddingL;
      return {year: year, x: x, y: y,
              path: 'M'+xLine+' '+y+' H' + tc.viewBoxW};
    }

    return [
      buildYearLine(1980, 2),
      buildYearLine(1990, 4),
      buildYearLine(2000, 9),
      buildYearLine(2010, 13)
    ];
  }.property()

});
