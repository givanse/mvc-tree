import { module, test } from 'qunit';
import { DEFAULT_SVG_ENV, calcViewBox } from '@svg-layout/environment';

module('Unit | svg-layout environment', function () {
  test('DEFAULT_SVG_ENV production constants', function (assert) {
    assert.strictEqual(DEFAULT_SVG_ENV.paddingT, 8);
    assert.strictEqual(DEFAULT_SVG_ENV.paddingR, 12);
    assert.strictEqual(DEFAULT_SVG_ENV.paddingB, 8);
    assert.strictEqual(DEFAULT_SVG_ENV.paddingL, 12);
    assert.strictEqual(DEFAULT_SVG_ENV.colW, 170 + 12);
    assert.strictEqual(DEFAULT_SVG_ENV.rowH, 64 + 18);
    assert.strictEqual(DEFAULT_SVG_ENV.maxCols, 6);
    assert.strictEqual(DEFAULT_SVG_ENV.maxRows, 29);
    assert.strictEqual(DEFAULT_SVG_ENV.yearLineFontSize, 12);
  });

  test('calcViewBox', function (assert) {
    let box = calcViewBox(10, 5, 10, 10);
    assert.strictEqual(box.viewBoxW, 100);
    assert.strictEqual(box.viewBoxH, 50);
    assert.strictEqual(box.viewBox, '0 0 100 50');
  });
});
