import { module, test } from 'qunit';
import { DEFAULT_SVG_ENV } from '@svg-layout/environment';
import { computeNodeGeometry } from '@svg-layout/grid-node';
import {
  generatePathToChild,
  generateBindingPath,
} from '@svg-layout/path-factory';
import { loadTreeData } from 'mvc-tree/utils/tree-data';

module('Unit | svg-layout path snapshots', function () {
  test('generatePathToChild TMVE → MVC79', function (assert) {
    let svgenv = {
      paddingT: 8,
      paddingR: 12,
      paddingB: 8,
      paddingL: 12,
      colW: 170 + 12,
      rowH: 64 + 18,
    };
    let a = { col: 0, row: 1, x: 0, y: 82 };
    let b = { col: 0, row: 2 };

    assert.strictEqual(
      generatePathToChild(svgenv, a, b),
      'M91 156 v8 h-4 l4 8 l4 -8 h-4',
    );
  });

  test('generateBindingPath MVVM – Data Binding (Stage 0 env)', function (assert) {
    let svgenv = {
      colW: 180,
      rowH: 80,
      paddingT: 2,
      paddingR: 4,
      paddingB: 8,
      paddingL: 16,
    };
    let a = { col: 3, row: 14, x: 540, y: 1120 };
    let b = { col: 6, row: 7, x: 1080, y: 560 };

    assert.strictEqual(
      generateBindingPath(svgenv, a, b),
      'M716 1160 h4 v-40 h360 v-480 v-40 h16',
    );
  });

  test('fixture geometry for TMVE matches the snapshot inputs', function (assert) {
    let data = loadTreeData({ showGrid: false });
    let tmve = data.byId.tmve;
    let mvc79 = data.byId.mvc79;
    let geometry = computeNodeGeometry(DEFAULT_SVG_ENV, 0, 1);

    assert.strictEqual(tmve.col, 0);
    assert.strictEqual(tmve.row, 1);
    assert.strictEqual(tmve.x, geometry.x);
    assert.strictEqual(tmve.y, geometry.y);
    assert.strictEqual(
      generatePathToChild(data.svgenv, tmve, mvc79),
      'M91 156 v8 h-4 l4 8 l4 -8 h-4',
    );
  });
});
