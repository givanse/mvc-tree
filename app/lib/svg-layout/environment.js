// Numeric SVG grid constants. Copied from the Ember service so a
// later static rewrite can import them without Ember.

export var DEFAULT_SVG_ENV = {
  paddingT: 8,
  paddingR: 12,
  paddingB: 8,
  paddingL: 12,

  colW: 170 + 12,
  rowH: 64 + 18,

  maxCols: 6,
  maxRows: 29,

  yearLineFontSize: 12 // from CSS rule .year_line_txt
};

export function calcViewBox(colW, rowH, maxCols, maxRows) {
  var viewBoxW = colW * maxCols,
      viewBoxH = rowH * maxRows;

  return {
    viewBoxW: viewBoxW,
    viewBoxH: viewBoxH,
    viewBox: '0 0 ' + viewBoxW + ' ' + viewBoxH
  };
}
