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
      colW: 20,
      rowH: 10
    })
  });
  var subject = PathFactoryObject.create();

  /* x
     0 = 10
     1 = 30
     3 = 50
     y
     0 = 10
     1 = 20
     2 = 30
  */

  /* 2x2 */

  var x = 10, y = 10, 
      result = subject._genPathC2C(x, y, 0, 0, 0, 0),
      expected = '';
  assert.equal(result, expected, 'same node');

  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 1, 0);
  expected = 'v-10';
  assert.equal(result, expected, 'node to the right');

  x = 30; y = 10; 
  result = subject._genPathC2C(x, y, 1, 0, 0, 0);
  expected = 'v-10';
  assert.equal(result, expected, 'node to the left');

  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 0, 1);
  expected = '';
  assert.equal(result, expected, 'node below (0,0) (0,1)');

  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 1, 1);
  expected = '';
  assert.equal(result, expected, 'diagonal node');

  /* 2x3 */

  /* 0,0 */
  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 2, 0);
  expected = 'h20 v-10';
  assert.equal(result, expected, '(0,0) (2,0)');

  x = 50; y = 10; 
  result = subject._genPathC2C(x, y, 2, 0, 0, 0);
  expected = 'h-20 v-10';
  assert.equal(result, expected, '(2,0) (0,0)');

  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 2, 1);
  expected = 'h20';
  assert.equal(result, expected, '(0,0) (2,1)');

  x = 50; y = 20; 
  result = subject._genPathC2C(x, y, 2, 1, 0, 0);
  expected = 'h-20 v-20';
  assert.equal(result, expected, '(2,1) (0,0)');

  /* 0,1 */
  x = 10; y = 20; 
  result = subject._genPathC2C(x, y, 0, 1, 2, 0);
  expected = 'h20 v-20';
  assert.equal(result, expected, '(0,1) (2,0)');

  x = 10; y = 20; 
  result = subject._genPathC2C(x, y, 0, 1, 2, 1);
  expected = 'h20 v-10';
  assert.equal(result, expected, '(0,1) (2,1)');

  x = 50; y = 10; 
  result = subject._genPathC2C(x, y, 2, 0, 0, 1);
  expected = 'h-20';
  assert.equal(result, expected, '(2,0) (0,1)');

  x = 50; y = 20; 
  result = subject._genPathC2C(x, y, 2, 1, 0, 1);
  expected = 'h-20 v-10';
  assert.equal(result, expected, '(2,1) (0,1)');

  /* 3x2 */

  /* 0,0 */
  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 0, 2);
  expected = 'v10';
  assert.equal(result, expected, '(0,0) (0,2)');

  x = 10; y = 30; 
  result = subject._genPathC2C(x, y, 0, 2, 0, 0);
  expected = 'v-10';
  assert.equal(result, expected, '(0,2) (0,0)');

  x = 10; y = 10; 
  result = subject._genPathC2C(x, y, 0, 0, 1, 2);
  expected = 'v10';
  assert.equal(result, expected, '(0,0) (1,2)');

  x = 30; y = 30; 
  result = subject._genPathC2C(x, y, 1, 2, 0, 0);
  expected = 'v-10';
  assert.equal(result, expected, '(1,2) (0,0)');

  /* 1,0 */
  x = 30; y = 10; 
  result = subject._genPathC2C(x, y, 1, 0, 0, 2);
  expected = 'v10';
  assert.equal(result, expected, '(1,0) (0,2)');

  x = 10; y = 30; 
  result = subject._genPathC2C(x, y, 0, 2, 1, 0);
  expected = 'v-10';
  assert.equal(result, expected, '(0,2) (1,0)');

  x = 30; y = 10; 
  result = subject._genPathC2C(x, y, 1, 0, 1, 2);
  expected = 'v10';
  assert.equal(result, expected, '(1,0) (1,2)');

  x = 30; y = 30; 
  result = subject._genPathC2C(x, y, 1, 2, 1, 0);
  expected = 'v-10';
  assert.equal(result, expected, '(1,2) (1,0)');

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
      result = subject._genPathC2C(x, y, 1, 1, 3, 3),
      expected = 'h100 v100';
  assert.equal(result, expected, '(1,1) (3,3)');

  x = 350; y = 400; 
  result = subject._genPathC2C(x, y, 3, 3, 1, 1);
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

test('generateBindingPath basic', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      colW: 20,
      rowH: 20
    })
  });
  var subject = PathFactoryObject.create();

  var a = Ember.Object.create({col: 0, row: 0});
  var b = Ember.Object.create({col: 0, row: 0});
  var result = subject.generateBindingPath(a, b);
  var expected = '';
  assert.equal(result, expected);

  a = Ember.Object.create({col: 0, row: 0});
  b = Ember.Object.create({col: 1, row: 0});
  result = subject.generateBindingPath(a, b);
  expected = '';
  assert.equal(result, expected);

  a = Ember.Object.create({col: 0, row: 0});
  b = Ember.Object.create({col: 2, row: 0});
  result = subject.generateBindingPath(a, b);
  expected = 'M20 10 h20';
  assert.equal(result, expected);
});

