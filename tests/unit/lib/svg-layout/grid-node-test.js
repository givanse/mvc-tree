import { computeNodeGeometry } from 'mvc-tree/lib/svg-layout/grid-node';
import { module, test } from 'qunit';

module('lib:svg-layout/grid-node');

test('computeNodeGeometry 0,0 padding 15 0 0 10', function(assert) {
  var svgenv = {
    colW: 30, rowH: 60,
    paddingT: 15,
    paddingR: 0,
    paddingB: 0,
    paddingL: 10
  };
  var geometry = computeNodeGeometry(svgenv, 0, 0);

  assert.equal(geometry.x, 0, 'x 0');
  assert.equal(geometry.y, 0, 'y 0');
  assert.equal(geometry.x_padded, 10, 'x 10');
  assert.equal(geometry.y_padded, 15, 'y 15');
  assert.equal(geometry.width, 20, 'width 20');
  assert.equal(geometry.height, 45, 'height 45');
  assert.equal(geometry.cx, 15, 'cx 15');
  assert.equal(geometry.cy, 30, 'cy 30');
  assert.equal(geometry.rx, 10, 'rx 10');
  assert.equal(geometry.ry, 22.5, 'ry 22.5');
});

test('computeNodeGeometry 1,1 padding 15 0 0 10', function(assert) {
  var svgenv = {
    colW: 30, rowH: 60,
    paddingT: 15,
    paddingR: 0,
    paddingB: 0,
    paddingL: 10
  };
  var geometry = computeNodeGeometry(svgenv, 1, 1);

  assert.equal(geometry.x, 30, 'x 30');
  assert.equal(geometry.y, 60, 'y 60');
  assert.equal(geometry.x_padded, 40, 'x 40');
  assert.equal(geometry.y_padded, 75, 'y 75');
  assert.equal(geometry.cx, 45, 'cx 45');
  assert.equal(geometry.cy, 90, 'cy 90');
});
