import getProp from './get-prop';

export function buildGridLines(svgenv) {
  var w = getProp(svgenv, 'viewBoxW'),
      h = getProp(svgenv, 'viewBoxH'),
      colW = getProp(svgenv, 'colW'),
      rowH = getProp(svgenv, 'rowH'),
      gridLines = [];

  for (var x = 0; x < w; x += colW) {
    gridLines.push('M' + x + ' 0 V' + h + ' Z');
  }
  for (var y = 0; y < h; y += rowH) {
    gridLines.push('M0 ' + y + ' H' + w + ' Z');
  }

  return gridLines;
}

export function buildYearLine(svgenv, year, row) {
  var x = getProp(svgenv, 'yearLineFontSize') * 2,
      y = row * getProp(svgenv, 'rowH'),
      xLine = getProp(svgenv, 'yearLineFontSize') * 4;

  return {year: year, x: x, y: y,
          path: 'M'+xLine+' '+y+' H' + getProp(svgenv, 'viewBoxW')};
}
