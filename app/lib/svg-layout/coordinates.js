import getProp from './get-prop';

export function getBorderPos(svgenv, gridNode, options) {
  var x = getProp(gridNode, 'x');
  var y = getProp(gridNode, 'y');
  var colW = getProp(svgenv, 'colW');
  var rowH = getProp(svgenv, 'rowH');

  switch( options.border ) {
    case 'top':
      x += colW / 2;
      y += getProp(svgenv, 'paddingT');
      break;
    case 'right':
      x += colW;
      x -= getProp(svgenv, 'paddingR');
      y += rowH / 2;
      break;
    case 'bottom':
      x += colW / 2;
      y += rowH;
      y -= getProp(svgenv, 'paddingB');
      break;
    case 'left':
      x += getProp(svgenv, 'paddingL');
      y += rowH / 2;
      break;
    default:
      return null;
  }

  return {x: x, y: y};
}
