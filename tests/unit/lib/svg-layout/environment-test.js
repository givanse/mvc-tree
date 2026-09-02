import { DEFAULT_SVG_ENV, calcViewBox } from 'mvc-tree/lib/svg-layout/environment';
import { module, test } from 'qunit';

module('lib:svg-layout/environment');

test('DEFAULT_SVG_ENV production constants', function(assert) {
  assert.equal(DEFAULT_SVG_ENV.paddingT, 8);
  assert.equal(DEFAULT_SVG_ENV.paddingR, 12);
  assert.equal(DEFAULT_SVG_ENV.paddingB, 8);
  assert.equal(DEFAULT_SVG_ENV.paddingL, 12);
  assert.equal(DEFAULT_SVG_ENV.colW, 170 + 12);
  assert.equal(DEFAULT_SVG_ENV.rowH, 64 + 18);
  assert.equal(DEFAULT_SVG_ENV.maxCols, 6);
  assert.equal(DEFAULT_SVG_ENV.maxRows, 29);
  assert.equal(DEFAULT_SVG_ENV.yearLineFontSize, 12);
});

test('calcViewBox', function(assert) {
  var box = calcViewBox(10, 5, 10, 10);
  assert.equal(box.viewBoxW, 100);
  assert.equal(box.viewBoxH, 50);
  assert.equal(box.viewBox, '0 0 100 50');
});
