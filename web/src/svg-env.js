import { DEFAULT_SVG_ENV, calcViewBox } from '@svg-layout/environment';

export const ROW_DIVIDERS = [
  { year: 1980, row: 3 },
  { year: 1990, row: 6 },
  { year: 2000, row: 15 },
  { year: 2010, row: 25 }
];

export function createSvgEnv(options) {
  var showGrid = options && options.showGrid;
  if (showGrid == null) {
    showGrid = Boolean(import.meta.env && import.meta.env.DEV);
  }

  var box = calcViewBox(
    DEFAULT_SVG_ENV.colW,
    DEFAULT_SVG_ENV.rowH,
    DEFAULT_SVG_ENV.maxCols,
    DEFAULT_SVG_ENV.maxRows
  );

  return Object.assign({}, DEFAULT_SVG_ENV, box, { showGrid: showGrid });
}
