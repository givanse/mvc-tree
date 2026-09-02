import getProp from './get-prop';

// Pixel geometry for one grid cell. Algorithm unchanged from
// app/models/grid-node.js _addNodeValues.
export function computeNodeGeometry(svgenv, col, row) {
  var colW = getProp(svgenv, 'colW');
  var rowH = getProp(svgenv, 'rowH');
  var paddingL = getProp(svgenv, 'paddingL');
  var paddingR = getProp(svgenv, 'paddingR');
  var paddingT = getProp(svgenv, 'paddingT');
  var paddingB = getProp(svgenv, 'paddingB');

  var x = col * colW;
  var y = row * rowH;
  var width = colW - paddingL - paddingR;
  var height = rowH - paddingT - paddingB;

  return {
    x: x,
    y: y,
    x_padded: paddingL + x,
    y_padded: paddingT + y,
    cx: x + (colW / 2),
    cy: y + (rowH / 2),
    width: width,
    height: height,
    rx: width / 2,
    ry: height / 2
  };
}
