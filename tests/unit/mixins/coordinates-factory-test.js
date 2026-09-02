import { getBorderPos } from 'mvc-tree/lib/svg-layout/coordinates';
import { module, test } from 'qunit';

module('lib:svg-layout/coordinates');

test('getBorderPos', function(assert) {
  var svgenv = {
    colW: 30,
    rowH: 30,
    paddingT: 0,
    paddingR: 0,
    paddingB: 0,
    paddingL: 0
  };

  // padding 0

  // top
  var gridNode = {x: 0, y: 0};
  var expected = {x: 15, y: 0};
  var options = {border: 'top'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // right
  gridNode = {x: 0, y: 0};
  expected = {x: 30, y: 15};
  options = {border: 'right'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // bottom
  gridNode = {x: 0, y: 0};
  expected = {x: 15, y: 30};
  options = {border: 'bottom'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // left
  gridNode = {x: 0, y: 0};
  expected = {x: 0, y: 15};
  options = {border: 'left'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // padding 7

  svgenv.paddingT = 7;
  svgenv.paddingR = 7;
  svgenv.paddingB = 7;
  svgenv.paddingL = 7;

  // top
  gridNode = {x: 0, y: 0};
  expected = {x: 15, y: 7};
  options = {border: 'top'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // right
  gridNode = {x: 0, y: 0};
  expected = {x: 23, y: 15};
  options = {border: 'right'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // bottom
  gridNode = {x: 0, y: 0};
  expected = {x: 15, y: 23};
  options = {border: 'bottom'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);

  // left
  gridNode = {x: 0, y: 0};
  expected = {x: 7, y: 15};
  options = {border: 'left'};
  assert.deepEqual(getBorderPos(svgenv, gridNode, options), expected);
});
