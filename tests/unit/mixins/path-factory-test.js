import Ember from 'ember';
import PathFactoryMixin from '../../../mixins/path-factory';
import { module, test } from 'qunit';

module('mixin:path-factory');

// Replace this with your real tests.
test('it works', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();
  assert.ok(subject);
});

test('_calcHDir', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();

  assert.equal(subject._calcHDir(0, 0), 1);
  assert.equal(subject._calcHDir(0, 1), 1);
  assert.equal(subject._calcHDir(1, 0), -1);
  assert.equal(subject._calcHDir(1, 1), 1);

  assert.equal(subject._calcHDir(50, 50), 1);
  assert.equal(subject._calcHDir(10, 20), 1);
  assert.equal(subject._calcHDir(20, 10), -1);
});

test('_calcVDir', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();

  // row1, row2
  assert.equal(subject._calcVDir(0, 0), -1);
  assert.equal(subject._calcVDir(0, 1), 1);
  assert.equal(subject._calcVDir(1, 0), -1);
  assert.equal(subject._calcVDir(1, 1), -1);

  assert.equal(subject._calcVDir(6, 13), 1);
});

test('_calcHDelta', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();

  assert.equal(subject._calcHDelta(0, 0), 0, '0, 0');
  assert.equal(subject._calcHDelta(0, 1), 0, '0, 1');
  assert.equal(subject._calcHDelta(1, 0), 0, '1, 0');
  assert.equal(subject._calcHDelta(1, 1), 0, '1, 1');

  assert.equal(subject._calcHDelta(0, 2), 1);
  assert.equal(subject._calcHDelta(2, 0), 1);

  assert.equal(subject._calcHDelta(0, 10), 9);
  assert.equal(subject._calcHDelta(10, 0), 9);
});

test('_calcVDelta', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();

  assert.equal(subject._calcVDelta(0, 0), 1);
  assert.equal(subject._calcVDelta(0, 1), 0);
  assert.equal(subject._calcVDelta(1, 0), 2);
  assert.equal(subject._calcVDelta(1, 1), 1);

  assert.equal(subject._calcVDelta(0, 2), 1);
  assert.equal(subject._calcVDelta(2, 0), 1);

  assert.equal(subject._calcVDelta(0, 10), 9);
  assert.equal(subject._calcVDelta(10, 0), 9);
});

test('_genHPathP2C', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 60
    })
  });
  var subject = PathFactoryObject.create();

  // hDelta, vDelta
  assert.equal(subject._genHPathP2C(0, 0), '');
  assert.equal(subject._genHPathP2C(1, 0), 'h30');
  assert.equal(subject._genHPathP2C(0, 1), '');
  assert.equal(subject._genHPathP2C(1, 1), 'h30');

  assert.equal(subject._genHPathP2C(0, 2), 'h30');
  assert.equal(subject._genHPathP2C(2, 0), 'h30');
});

test('_genHPathC2Ch', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 60
    })
  });
  var subject = PathFactoryObject.create();

  // 2x2
  assert.equal(subject._genHPathC2Ch(0, 0), '');
  assert.equal(subject._genHPathC2Ch(0, 1), '');
  assert.equal(subject._genHPathC2Ch(1, 0), 'h30');
  assert.equal(subject._genHPathC2Ch(1, 1), 'h30');

  // 3x2
  assert.equal(subject._genHPathC2Ch(2, 0), 'h30');
  assert.equal(subject._genHPathC2Ch(2, 1), 'h30');

  // 2x3
  assert.equal(subject._genHPathC2Ch(0, 2), 'h-30');
  assert.equal(subject._genHPathC2Ch(1, 2), 'h30');
});

test('_genPathC2C basic', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 40,
      rowH: 40
    })
  });
  var subject = PathFactoryObject.create();

  /* 2x2 */

  var result = subject._genPathC2C(0, 0, 0, 0),
      expected = null;
  assert.equal(result, expected, 'same node');

  result = subject._genPathC2C(0, 0, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, 'node to the right');

  result = subject._genPathC2C(1, 0, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, 'node to the left');

  result = subject._genPathC2C(0, 0, 0, 1);
  expected = null;
  assert.equal(result, expected, 'node below');

  result = subject._genPathC2C(0, 0, 1, 1);
  expected = null;
  assert.equal(result, expected, 'diagonal node');

  /* 2x3 */

  /* 0,0 */
  result = subject._genPathC2C(0, 0, 2, 0);
  expected = 'h40 v-40';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = subject._genPathC2C(2, 0, 0, 0);
  expected = 'h-40 v-40';
  assert.equal(result, expected, '(2,0) (0,0)');

  result = subject._genPathC2C(0, 0, 2, 1);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,1)');

  result = subject._genPathC2C(2, 1, 0, 0);
  expected = 'h-40 v-80';
  assert.equal(result, expected, '(2,1) (0,0)');

  /* 0,1 */
  result = subject._genPathC2C(0, 1, 2, 0);
  expected = 'h40 v-80';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = subject._genPathC2C(0, 1, 2, 1);
  expected = 'h40 v-40';
  assert.equal(result, expected, '(0,1) (2,1)');

  result = subject._genPathC2C(2, 0, 0, 1);
  expected = 'h-40';
  assert.equal(result, expected, '(2,0) (0,1)');

  result = subject._genPathC2C(2, 1, 0, 1);
  expected = 'h-40 v-40';
  assert.equal(result, expected, '(2,1) (0,1)');

  /* 3x2 */

  /* 0,0 */
  result = subject._genPathC2C(0, 0, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (0,2)');

  result = subject._genPathC2C(0, 2, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(0,2) (0,0)');

  result = subject._genPathC2C(0, 0, 1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (1,2)');

  result = subject._genPathC2C(1, 2, 0, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(1,2) (0,0)');

  /* 1,0 */
  result = subject._genPathC2C(1, 0, 0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (0,2)');

  result = subject._genPathC2C(0, 2, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(0,2) (1,0)');

  result = subject._genPathC2C(1, 0, 1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (1,2)');

  result = subject._genPathC2C(1, 2, 1, 0);
  expected = 'v-40';
  assert.equal(result, expected, '(1,2) (1,0)');
});

test('_getHMultC2C', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 40,
      rowH: 40
    })
  });
  var subject = PathFactoryObject.create();
  
  var result = subject._getHMultC2C(0);
  var expected = 0;
  assert.equal(result, expected);

  result = subject._getHMultC2C(1);
  expected = 0;
  assert.equal(result, expected);

  result = subject._getHMultC2C(-1);
  expected = 0;
  assert.equal(result, expected);

  result = subject._getHMultC2C(2);
  expected = 1;
  assert.equal(result, expected, '2');

  result = subject._getHMultC2C(-2);
  expected = 0;
  assert.equal(result, expected, '-2');
});

test('_getVMultC2C', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 40,
      rowH: 40
    })
  });
  var subject = PathFactoryObject.create();
  
  var result = subject._getVMultC2C(0);
  var expected = 0;
  assert.equal(result, expected, 'vDelta 0');
  
  result = subject._getVMultC2C(1);
  expected = 0;
  assert.equal(result, expected, 'vDelta 1');
  
  result = subject._getVMultC2C(-1);
  expected = 0;
  assert.equal(result, expected, 'vDelta -1');
  
  result = subject._getVMultC2C(2);
  expected = 1;
  assert.equal(result, expected, 'vDelta 2');
  
  result = subject._getVMultC2C(-2);
  expected = -1;
  assert.equal(result, expected, 'vDelta -2');
  
  result = subject._getVMultC2C(-7);
  expected = -6;
  assert.equal(result, expected, '(3,14) (6,7) vDelta -7');
  
  result = subject._getVMultC2C(7);
  expected = 6;
  assert.equal(result, expected, '(3,7) (6,14) vDelta 7');
});

test('_genPathC2CR basic', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 40,
      rowH: 40
    })
  });
  var subject = PathFactoryObject.create();

  /* 2x2 */

  var result = subject._genPathC2CR(0, 0),
      expected = null;
  assert.equal(result, expected, 'same node');

  result = subject._genPathC2CR(1, 0);
  expected = null;
  assert.equal(result, expected, 'node to the right');

  result = subject._genPathC2CR(-1, 0);
  expected = null;
  assert.equal(result, expected, 'node to the left');

  result = subject._genPathC2CR(0, 1);
  expected = null;
  assert.equal(result, expected, 'node below');

  result = subject._genPathC2CR(1, 1);
  expected = null;
  assert.equal(result, expected, 'diagonal node');

  /* 2x3 */

  /* 0,0 */
  result = subject._genPathC2CR(2, 0);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = subject._genPathC2CR(2, 1);
  expected = 'h40';
  assert.equal(result, expected, '(0,0) (2,1)');

  /* 0,1 */
  result = subject._genPathC2CR(2, -1);
  expected = 'h40';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = subject._genPathC2CR(2, 0);
  expected = 'h40';
  assert.equal(result, expected, '(0,1) (2,1)');

  /* 3x2 */

  /* 0,0 */
  result = subject._genPathC2CR(0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (0,2)');

  result = subject._genPathC2CR(1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(0,0) (1,2)');

  /* 1,0 */
  result = subject._genPathC2CR(-1, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (0,2)');

  result = subject._genPathC2CR(0, 2);
  expected = 'v40';
  assert.equal(result, expected, '(1,0) (1,2)');

  // non basic cases

  result = subject._genPathC2CR(3, -7);
  expected = 'h80 v-240';
  assert.equal(result, expected, '(3,14) (6,7)');
});

test('_genPathC2C 5x5', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      paddingT: 20, 
      paddingB: 20, 
      colW: 100,
      rowH: 100
    })
  });
  var subject = PathFactoryObject.create();

  var x = 150, y = 200, 
      result = subject._genPathC2C(1, 1, 3, 3),
      expected = 'h100 v100';
  assert.equal(result, expected, '(1,1) (3,3)');

  x = 350; y = 400; 
  result = subject._genPathC2C(3, 3, 1, 1);
  expected = 'h-100 v-100';
  assert.equal(result, expected, '(3,3) (1,1)');
});

test('generatePathToChild', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      paddingT: 5,
      paddingB: 5,
      colW: 40,
      rowH: 20
    })
  });
  var subject = PathFactoryObject.create();

  var a = Ember.Object.create({
        col: 0,
        row: 0
      }),
      b = Ember.Object.create({
        col: 0,
        row: 0
      }),
      result = subject.generatePathToChild(a, b),
      expected = '';
  assert.equal(result, expected, 'same node');
  /*
     __
    |a |
    |_b|
  */
  a = Ember.Object.create({
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5, 
  });
  b = Ember.Object.create({
    col: 1,
    row: 1
  });
  result = subject.generatePathToChild(a, b);
  expected = 'M20 15 v5 h20 h20 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'diagonal');

  /*
     __
    |ab|
    |__|
  */
  a = Ember.Object.create({
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5, 
  });
  b = Ember.Object.create({
    col: 1,
    row: 0,
  });
  result = subject.generatePathToChild(a, b);
  expected = 'M20 15 v5 h20 v-20 h20 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'node to the right (0,0) (1,0)');

  /*
     __
    |a |
    |b_|
  */
  a = Ember.Object.create({
    col: 0,
    row: 0,
    x: 0,
    y: 0,
    width: 40,
    height: 10,
    cx: 20,
    y_padded: 5, 
  });
  b = Ember.Object.create({
    col: 0,
    row: 1,
  });
  result = subject.generatePathToChild(a, b);
  expected = 'M20 15 v5 h-2.5 l2.5 5 l2.5 -5 h-2.5';
  assert.equal(result, expected, 'node to the right (0,0) (1,0)');

});

test('generatePathToChild am -> pm', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      paddingT: 6,
      paddingR: 6,
      paddingB: 12,
      paddingL: 6,
      colW: 170 + 12,
      rowH: 64 + 18
    })
  });
  var subject = PathFactoryObject.create();

  var a = Ember.Object.create({
      col: 1,
      row: 6,
      x: 182,
      y: 492,
      width: 170,
      height: 64,
      cx: 273,
      y_padded: 498, 
    }),
    b = Ember.Object.create({
      col: 1,
      row: 13,
    }),
    result = subject.generatePathToChild(a, b),
    expected = 'M273 562 v12 h91 v492 h-91 h-3 l3 6 l3 -6 h-3';
  assert.equal(result, expected);
});

test('_genVPathN2C', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      rowH: 40
    })
  });
  var subject = PathFactoryObject.create();

  // hDelta 0
  
  var result = subject._genVPathN2C(0, 0);
  var expected = null;
  assert.equal(result, expected);

  result = subject._genVPathN2C(0, 1);
  expected = 'v20';
  assert.equal(result, expected);

  result = subject._genVPathN2C(0, -1);
  expected = 'v-20';
  assert.equal(result, expected, 'hDelta 0 vDelta -1');

  // hDelta 1
  
  result = subject._genVPathN2C(1, 0);
  expected = null;
  assert.equal(result, expected, 'same row, contiguous');

  result = subject._genVPathN2C(1, 1);
  expected = 'v20';
  assert.equal(result, expected);

  result = subject._genVPathN2C(1, -1);
  expected = 'v-20';
  assert.equal(result, expected, 'hDelta 1 vDelta -1');

  // hDelta -1
  
  result = subject._genVPathN2C(-1, 0);
  expected = null;
  assert.equal(result, expected, 'do not accept a right-to-left direction');
});

test('_orderNodes', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 10,
      rowH: 10,
      paddingT: 0,
      paddingR: 0,
      paddingB: 0,
      paddingL: 0
    })
  });
  var subject = PathFactoryObject.create();

  // 3x3 node `a` at the center (1,1)

  var a = Ember.Object.create({col: 1, row: 1});
  var b = Ember.Object.create({col: 1, row: 1});
  var result = subject._orderNodes(a, b);
  var expected = null;
  assert.equal(result, expected, 'same node');

  // swap needed

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 0, row: 0});
  result = subject._orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,0 swap');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 0, row: 1});
  result = subject._orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,1 swap');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 0, row: 2});
  result = subject._orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 0,2 swap');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 1, row: 0});
  result = subject._orderNodes(a, b);
  expected = {a: b, b: a};
  assert.deepEqual(result, expected, '1,1 1,0 swap');

  // no swap

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 2, row: 0});
  result = subject._orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,0');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 2, row: 1});
  result = subject._orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,1');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 1, row: 2});
  result = subject._orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 1,2');

  a = Ember.Object.create({col: 1, row: 1});
  b = Ember.Object.create({col: 2, row: 2});
  result = subject._orderNodes(a, b);
  expected = {a: a, b: b};
  assert.deepEqual(result, expected, '1,1 2,2');
});

test('generateBindingPath 3x2 simple', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 40,
      rowH: 40,
      paddingT: 0,
      paddingR: 0,
      paddingB: 0,
      paddingL: 0
    })
  });
  var subject = PathFactoryObject.create();

  // #__
  // ___
  var a = Ember.Object.create({col: 0, row: 0, x: 0, y: 0});
  var b = Ember.Object.create({col: 0, row: 0, x: 0, y: 0});
  var result = subject.generateBindingPath(a, b);
  var expected = null;
  assert.equal(result, expected, 'same node');

  // ##_
  // ___
  a = Ember.Object.create({col: 0, row: 0, x:  0, y: 0});
  b = Ember.Object.create({col: 1, row: 0, x: 40, y: 0});
  result = subject.generateBindingPath(a, b);
  expected = null;
  assert.equal(result, expected, 'contiguous a b (0,0) (1,0)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected, 'same row, contiguous b a');

  // 3x2

  // #_#
  // ___
  a = Ember.Object.create({col: 0, row: 0, x: 0, y: 0});
  b = Ember.Object.create({col: 2, row: 0, x: 80, y: 0});
  result = subject.generateBindingPath(a, b);
  expected = 'M40 20 v20 h40 v-20';
  assert.equal(result, expected, '(0,0) (2,0)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected, '(0,0) (2,0)');

  // #__
  // __#
  a = Ember.Object.create({col: 0, row: 0, x: 0, y: 0});
  b = Ember.Object.create({col: 2, row: 1, x: 0, y: 0});
  result = subject.generateBindingPath(a, b);
  expected = 'M40 20 v20 h40 v20';
  assert.equal(result, expected, '(0,0) (2,1)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected);

  // __#
  // #__
  a = Ember.Object.create({col: 0, row: 1, x: 0, y: 40});
  b = Ember.Object.create({col: 2, row: 0, x: 80, y: 0});
  result = subject.generateBindingPath(a, b);
  expected = 'M40 60 v-20 h40 v-20';
  assert.equal(result, expected, '(0,1) (2,0)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected, '(2,0) (0,1)');

  // 2x3
  
  // _#
  // __
  // _#
  a = Ember.Object.create({col: 1, row: 0, x: 40, y: 0});
  b = Ember.Object.create({col: 1, row: 2, x: 40, y: 80});
  result = subject.generateBindingPath(a, b);
  expected = 'M80 20 v20 v40 v20';
  assert.equal(result, expected, '(1,0) (1,2)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected, '(1,2) (1,0)');

  // #_
  // __
  // _#
  a = Ember.Object.create({col: 0, row: 0, x: 0,  y: 0});
  b = Ember.Object.create({col: 1, row: 2, x: 40, y: 80});
  result = subject.generateBindingPath(a, b);
  expected = 'M40 20 v20 v40 v20';
  assert.equal(result, expected, '(0,0) (1,2)');

  result = subject.generateBindingPath(b, a);
  assert.equal(result, expected, '(1,2) (0,0)');
});

test('generateBindingPath MVVM - Data Binding', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 180,
      rowH: 80,
      paddingT: 2,
      paddingR: 4,
      paddingB: 8,
      paddingL: 16,
    })
  });
  var subject = PathFactoryObject.create();

  var a = Ember.Object.create({col: 3, row: 14, x: 540,  y: 1120});
  var b = Ember.Object.create({col: 6, row: 7,  x: 1080, y: 560});
  var result = subject.generateBindingPath(a, b);
  var expected = 'M716 1160 h4 v-40 h360 v-480 v-40 h16';
  assert.equal(result, expected);
});

