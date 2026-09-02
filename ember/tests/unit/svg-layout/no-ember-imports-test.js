import { module, test } from 'qunit';
import { DEFAULT_SVG_ENV } from '@svg-layout/environment';
import { getBorderPos } from '@svg-layout/coordinates';
import { generatePathToChild } from '@svg-layout/path-factory';
import { computeNodeGeometry } from '@svg-layout/grid-node';
import { buildYearLine } from '@svg-layout/lines';

module('Unit | svg-layout no Ember imports', function () {
  test('plain modules accept plain objects', function (assert) {
    let geometry = computeNodeGeometry(DEFAULT_SVG_ENV, 0, 1);
    let path = generatePathToChild(
      DEFAULT_SVG_ENV,
      {
        col: 0,
        row: 1,
        x: geometry.x,
        y: geometry.y,
      },
      {
        col: 0,
        row: 2,
      },
    );

    assert.strictEqual(path, 'M91 156 v8 h-4 l4 8 l4 -8 h-4');
    assert.deepEqual(
      getBorderPos(DEFAULT_SVG_ENV, { x: 0, y: 82 }, { border: 'bottom' }),
      {
        x: 91,
        y: 156,
      },
    );
    assert.strictEqual(
      buildYearLine(
        {
          yearLineFontSize: 12,
          rowH: 60,
          viewBoxW: 30,
        },
        1514,
        1,
      ).path,
      'M48 60 H30',
    );
  });
});
