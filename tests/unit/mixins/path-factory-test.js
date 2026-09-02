import {
  calcHDir,
  calcVDir,
  calcHDelta,
  calcVDelta,
  genHPathP2C,
  genHPathC2Ch,
  genPathC2C,
  getHMultC2C,
  getVMultC2C,
  genPathC2CR,
  generatePathToChild,
  genVPathN2C,
  orderNodes,
  generateBindingPath
} from 'mvc-tree/lib/svg-layout/path-factory';
import { module, test } from 'qunit';

module('lib:svg-layout/path-factory');

test('calcHDir', function(assert) {
  assert.equal(calcHDir(0, 0), 1);
  assert.equal(calcHDir(0, 1), 1);
  assert.equal(calcHDir(1, 0), -1);
  assert.equal(calcHDir(1, 1), 1);

  assert.equal(calcHDir(50, 50), 1);
  assert.equal(calcHDir(10, 20), 1);
  assert.equal(calcHDir(20, 10), -1);
});

test('calcVDir', function(assert) {
  // row1, row2
  assert.equal(calcVDir(0, 0), -1);
  assert.equal(calcVDir(0, 1), 1);
  assert.equal(calcVDir(1, 0), -1);
  assert.equal(calcVDir(1, 1), -1);

  assert.equal(calcVDir(6, 13), 1);
});

test('calcHDelta', function(assert) {
  assert.equal(calcHDelta(0, 0), 0, '0, 0');
  assert.equal(calcHDelta(0, 1), 0, '0, 1');
  assert.equal(calcHDelta(1, 0), 0, '1, 0');
  assert.equal(calcHDelta(1, 1), 0, '1, 1');

  assert.equal(calcHDelta(0, 2), 1);
  assert.equal(calcHDelta(2, 0), 1);

  assert.equal(calcHDelta(0, 10), 9);
  assert.equal(calcHDelta(10, 0), 9);
});

test('calcVDelta', function(assert) {
  assert.equal(calcVDelta(0, 0), 1);
  assert.equal(calcVDelta(0, 1), 0);
  assert.equal(calcVDelta(1, 0), 2);
  assert.equal(calcVDelta(1, 1), 1);

  assert.equal(calcVDelta(0, 2), 1);
  assert.equal(calcVDelta(2, 0), 1);

  assert.equal(calcVDelta(0, 10), 9);
  assert.equal(calcVDelta(10, 0), 9);
});

test('genHPathP2C', function(assert) {
  var svgenv = { colW: 60 };

  // hDelta, vDelta
  assert.equal(genHPathP2C(svgenv, 0, 0), '');
  assert.equal(genHPathP2C(svgenv, 1, 0), 'h30');
  assert.equal(genHPathP2C(svgenv, 0, 1), '');
  assert.equal(genHPathP2C(svgenv, 1, 1), 'h30');

  assert.equal(genHPathP2C(svgenv, 0, 2), 'h30');
  assert.equal(genHPathP2C(svgenv, 2, 0), 'h30');
});

test('genHPathC2Ch', function(assert) {
  var svgenv = { colW: 60 };

  // 2x2
  assert.equal(genHPathC2Ch(svgenv, 0, 0), '');
  assert.equal(genHPathC2Ch(svgenv, 0, 1), '');
  assert.equal(genHPathC2Ch(svgenv, 1, 0), 'h30');
  assert.equal(genHPathC2Ch(svgenv, 1, 1), 'h30');

  // 3x2
  assert.equal(genHPathC2Ch(svgenv, 2, 0), 'h30');
  assert.equal(genHPathC2Ch(svgenv, 2, 1), 'h30');

  // 2x3
  assert.equal(genHPathC2Ch(svgenv, 0, 2), 'h-30');
  assert.equal(genHPathC2Ch(svgenv, 1, 2), 'h30');
});

test('genPathC2C basic', function(assert) {
  var svgenv = { colW: 40, rowH: 40 };

  /* 2x2 */

  var result = genPathC2C(svgenv, 0, 0, 0, 0),
      expected = null;
  assert.equal(result, expected, 'same node');

  result = genPathC2C(svgenv, 0, 0, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, 'node to the right');

  result = genPathC2C(svgenv, 1, 0, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, 'node to the left');

  result = genPathC2C(svgenv, 0, 0, 0, 1);
  expected = null;
  assert.equal(result, expected, 'node below');

  result = genPathC2C(svgenv, 0, 0, 1, 1);
  expected = null;
  assert.equal(result, expected, 'diagonal node');

  /* 2x3 */

  /* 0,0 */
  result = genPathC2C(svgenv, 0, 0, 2, 0);
  expected = 'h40 v-40';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = genPathC2C(svgenv, 2, 0, 0, 0);
  expected = 'h-40 v-40';
  assert.equal(result, expected, '(2,0) (0,0)');

  result = genPathC2C(svgenv, 0, 0, 2, 1);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,1)');

  result = genPathC2C(svgenv, 2, 1, 0, 0);
  expected = 'h-40 v-80';
  assert.equal(result, expected, '(2,1) (0,0)');

  /* 0,1 */
  result = genPathC2C(svgenv, 0, 1, 2, 0);
  expected = 'h40 v-80';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = genPathC2C(svgenv, 0, 1, 2, 1);
  expected = 'h40 v-40';
  assert.equal(result, expected, '(0,1) (2,1)');

  result = genPathC2C(svgenv, 2, 0, 0, 1);
  expected = 'h-40';
  assert.equal(result, expected, '(2,0) (0,1)');

  result = genPathC2C(svgenv, 2, 1, 0, 1);
  expected = 'h-40 v-40';
  assert.equal(result, expected, '(2,1) (0,1)');

  /* 3x2 */

  /* 0,0 */
  result = genPathC2C(svgenv, 0, 0, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (0,2)');

  result = genPathC2C(svgenv, 0, 2, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(0,2) (0,0)');

  result = genPathC2C(svgenv, 0, 0, 1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (1,2)');

  result = genPathC2C(svgenv, 1, 2, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(1,2) (0,0)');

  /* 1,0 */
  result = genPathC2C(svgenv, 1, 0, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (0,2)');

  result = genPathC2C(svgenv, 0, 2, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(0,2) (1,0)');

  result = genPathC2C(svgenv, 1, 0, 1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (1,2)');

  result = genPathC2C(svgenv, 1, 2, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(1,2) (1,0)');
});

test('getHMultC2C', function(assert) {
  var result = getHMultC2C(0);
  var expected = 0;
  assert.equal(result, expected);

  result = getHMultC2C(1);
  expected = 0;
  assert.equal(result, expected);

  result = getHMultC2C(-1);
  expected = 0;
  assert.equal(result, expected);

  result = getHMultC2C(2);
  expected = 1;
  assert.equal(result, expected, '2');

  result = getHMultC2C(-2);
  expected = 0;
  assert.equal(result, expected, '-2');
});

test('getVMultC2C', function(assert) {
  var result = getVMultC2C(0);
  var expected = 0;
  assert.equal(result, expected, 'vDelta 0');

  result = getVMultC2C(1);
  expected = 0;
  assert.equal(result, expected, 'vDelta 1');

  result = getVMultC2C(-1);
  expected = 0;
  assert.equal(result, expected, 'vDelta -1');

  result = getVMultC2C(2);
  expected = 1;
  assert.equal(result, expected, 'vDelta 2');

  result = getVMultC2C(-2);
  expected = -1;
  assert.equal(result, expected, 'vDelta -2');

  result = getVMultC2C(-7);
  expected = -6;
  assert.equal(result, expected, '(3,14) (6,7) vDelta -7');

  result = getVMultC2C(7);
  expected = 6;
  assert.equal(result, expected, '(3,7) (6,14) vDelta 7');
});

test('genPathC2CR basic', function(assert) {
  var svgenv = { colW: 40, rowH: 40 };

  /* 2x2 */

  var result = genPathC2CR(svgenv, 0, 0),
      expected = null;
  assert.equal(result, expected, 'same node');

  result = genPathC2CR(svgenv, 1, 0);
  expected = null;
  assert.equal(result, expected, 'node to the right');

  result = genPathC2CR(svgenv, -1, 0);
  expected = null;
  assert.equal(result, expected, 'node to the left');

  result = genPathC2CR(svgenv, 0, 1);
  expected = null;
  assert.equal(result, expected, 'node below');

  result = genPathC2CR(svgenv, 1, 1);
  expected = null;
  assert.equal(result, expected, 'diagonal node');

  /* 2x3 */

  /* 0,0 */
  result = genPathC2CR(svgenv, 2, 0);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = genPathC2CR(svgenv, 2, 1);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,1)');

  /* 0,1 */
  result = genPathC2CR(svgenv, 2, -1);
  expected = 'h40';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = genPathC2CR(svgenv, 2, 0);
  expected = 'h40';
  assert.equal(result, expected, '(0,1) (2,1)');

  /* 3x2 */

  /* 0,0 */
  result = genPathC2CR(svgenv, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (0,2)');

  result = genPathC2CR(svgenv, 1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (1,2)');

  /* 1,0 */
  result = genPathC2CR(svgenv, -1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (0,2)');

  result = genPathC2CR(svgenv, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (1,2)');

  // non basic cases

  result = genPathC2CR(svgenv, 3, -7);
  expected = 'h80 v-240';
  assert.equal(result, expected, '(3,14) (6,7)');
});

test('genPathC2C 5x5', function(assert) {
  var svgenv = {
    paddingT: 20,
    paddingB: 20,
    colW: 100,
    rowH: 100
  };

  var result = genPathC2C(svgenv, 1, 1, 3, 3),
      expected = 'h100 v100';
  assert.equal(result, expected, '(1,1) (3,3)');

  result = genPathC2C(svgenv, 3, 3, 1, 1);
  expected = 'h-100 v-100';
  assert.equal(result, expected, '(3,3) (1,1)');
});

test('generatePathToChild', function(assert) {
  var svgenv = {
    paddingT: 5,
    paddingB: 5,
    colW: 40,
    rowH: 20
  };

  var a = {
        col: 0,
        row: 0
      },
      b = {
        col: 0,
        row: 0
      },
      result = generatePathToChild(svgenv, a, b),
      expected = '';
  assert.equal(result, expected, 'same node');
  /*
     __
    |a |
    |_b|
  */
  a = {
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5
  };
  b = {
    col: 1,
    row: 1
  };
  result = generatePathToChild(svgenv, a, b);
  expected = 'M20 15 v5 h20 h20 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'diagonal');

  /*
     __
    |ab|
    |__|
  */
  a = {
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5
  };
  b = {
    col: 1,
    row: 0
  };
  result = generatePathToChild(svgenv, a, b);
  expected = 'M20 15 v5 h20 v-20 h20 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'node to the right (0,0) (1,0)');

  /*
     __
    |a |
    |b_|
  */
  a = {
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5
  };
  b = {
    col: 0,
    row: 1
  };
  result = generatePathToChild(svgenv, a, b);
  expected = 'M20 15 v5 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'node to the right (0,0) (1,0)');

});

test('generatePathToChild am -> pm', function(assert) {
  var svgenv = {
    paddingT: 6,
    paddingR: 6,
    paddingB: 12,
    paddingL: 6,
    colW: 170 + 12,
    rowH: 64 + 18
  };

  var a = {
      col: 1,
      row: 6,
      x: 182,
      y: 492,
      width: 170,
      height: 64,
      cx: 273,
      y_padded: 498
    },
    b = {
      col: 1,
      row: 13
    },
    result = generatePathToChild(svgenv, a, b),
    expected = 'M273 562 v12 h91 v492 h-91 h-3 l3 6 l3 -6 h-3';
  assert.equal(result, expected);
});

test('genVPathN2C', function(assert) {
  var svgenv = { rowH: 40 };

  // hDelta 0

  var result = genVPathN2C(svgenv, 0, 0);
  var expected = null;
  assert.equal(result, expected);

  result = genVPathN2C(svgenv, 0, 1);
  expected = 'v20';
  assert.equal(result, expected);

  result = genVPathN2C(svgenv, 0, -1);
  expected = 'v-20';
  assert.equal(result, expected, 'hDelta 0 vDelta -1');

  // hDelta 1

  result = genVPathN2C(svgenv, 1, 0);
  expected = null;
  assert.equal(result, expected, 'same row, contiguous');

  result = genVPathN2C(svgenv, 1, 1);
  expected = 'v20';
  assert.equal(result, expected);

  result = genVPathN2C(svgenv, 1, -1);
  expected = 'v-20';
  assert.equal(result, expected, 'hDelta 1 vDelta -1');

  // hDelta -1

  result = genVPathN2C(svgenv, -1, 0);
  expected = null;
  assert.equal(result, expected, 'do not accept a right-to-left direction');
});

test('orderNodes', function(assert) {
  // 3x3 node `a` at the center (1,1)

  var a = {col: 1, row: 1};
  var b = {col: 1, row: 1};
  var result = orderNodes(a, b);
  var expected = null;
  assert.equal(result, expected, 'same node');

  // swap needed

  a = {col: 1, row: 1};
  b = {col: 0, row: 0};
  result = orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,0 swap');

  a = {col: 1, row: 1};
  b = {col: 0, row: 1};
  result = orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,1 swap');

  a = {col: 1, row: 1};
  b = {col: 0, row: 2};
  result = orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,2 swap');

  a = {col: 1, row: 1};
  b = {col: 1, row: 0};
  result = orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 1,0 swap');

  // no swap

  a = {col: 1, row: 1};
  b = {col: 2, row: 0};
  result = orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,0');

  a = {col: 1, row: 1};
  b = {col: 2, row: 1};
  result = orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,1');

  a = {col: 1, row: 1};
  b = {col: 1, row: 2};
  result = orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 1,2');

  a = {col: 1, row: 1};
  b = {col: 2, row: 2};
  result = orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,2');
});

test('generateBindingPath 3x2 simple', function(assert) {
  var svgenv = {
    colW: 40,
    rowH: 40,
    paddingT: 0,
    paddingR: 0,
    paddingB: 0,
    paddingL: 0
  };

  // #__
  // ___
  var a = {col: 0, row: 0, x: 0, y: 0};
  var b = {col: 0, row: 0, x: 0, y: 0};
  var result = generateBindingPath(svgenv, a, b);
  var expected = null;
  assert.equal(result, expected, 'same node');

  // ##_
  // ___
  a = {col: 0, row: 0, x:  0, y: 0};
  b = {col: 1, row: 0, x: 40, y: 0};
  result = generateBindingPath(svgenv, a, b);
  expected = null;
  assert.equal(result, expected, 'contiguous a b (0,0) (1,0)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected, 'same row, contiguous b a');

  // 3x2

  // #_#
  // ___
  a = {col: 0, row: 0, x: 0, y: 0};
  b = {col: 2, row: 0, x: 80, y: 0};
  result = generateBindingPath(svgenv, a, b);
  expected = 'M40 20 v20 h40 v-20';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected, '(0,0) (2,0)');

  // #__
  // __#
  a = {col: 0, row: 0, x: 0, y: 0};
  b = {col: 2, row: 1, x: 0, y: 0};
  result = generateBindingPath(svgenv, a, b);
  expected = 'M40 20 v20 h40 v20';
  assert.equal(result, expected, '(0,0) (2,1)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected);

  // __#
  // #__
  a = {col: 0, row: 1, x: 0, y: 40};
  b = {col: 2, row: 0, x: 80, y: 0};
  result = generateBindingPath(svgenv, a, b);
  expected = 'M40 60 v-20 h40 v-20';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected, '(2,0) (0,1)');

  // 2x3

  // _#
  // __
  // _#
  a = {col: 1, row: 0, x: 40, y: 0};
  b = {col: 1, row: 2, x: 40, y: 80};
  result = generateBindingPath(svgenv, a, b);
  expected = 'M80 20 v20 v40 v20';
  assert.equal(result, expected, '(1,0) (1,2)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected, '(1,2) (1,0)');

  // #_
  // __
  // _#
  a = {col: 0, row: 0, x: 0,  y: 0};
  b = {col: 1, row: 2, x: 40, y: 80};
  result = generateBindingPath(svgenv, a, b);
  expected = 'M40 20 v20 v40 v20';
  assert.equal(result, expected, '(0,0) (1,2)');

  result = generateBindingPath(svgenv, b, a);
  assert.equal(result, expected, '(1,2) (0,0)');
});

/*
  Stage 0 freeze snapshots. These expected `d` strings pin the path-factory
  algorithm (generatePathToChild / generateBindingPath). Do not change the
  mixin to make a snapshot pass; change the snapshot only if the fixtures
  or svg-environment constants change on purpose.
*/

test('generatePathToChild TMVE -> MVC79 (fixture snapshot)', function(assert) {
  // Production constants from app/lib/svg-layout/environment.js
  // TMVE: col 0 (classic-mvc), row 1
  // MVC79: col 0 (classic-mvc), row 2
  // x/y match grid-node._addNodeValues: x = col * colW, y = row * rowH
  var svgenv = {
    paddingT: 8,
    paddingR: 12,
    paddingB: 8,
    paddingL: 12,
    colW: 170 + 12,
    rowH: 64 + 18
  };

  var a = {
    col: 0,
    row: 1,
    x: 0,
    y: 82
  };
  var b = {
    col: 0,
    row: 2
  };

  assert.equal(
    generatePathToChild(svgenv, a, b),
    'M91 156 v8 h-4 l4 8 l4 -8 h-4'
  );
});

test('generateBindingPath MVVM - Data Binding', function(assert) {
  var svgenv = {
    colW: 180,
    rowH: 80,
    paddingT: 2,
    paddingR: 4,
    paddingB: 8,
    paddingL: 16
  };

  var a = {col: 3, row: 14, x: 540,  y: 1120};
  var b = {col: 6, row: 7,  x: 1080, y: 560};
  var result = generateBindingPath(svgenv, a, b);
  var expected = 'M716 1160 h4 v-40 h360 v-480 v-40 h16';
  assert.equal(result, expected);
});
