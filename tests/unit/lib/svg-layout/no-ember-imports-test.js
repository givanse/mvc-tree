import { DEFAULT_SVG_ENV } from 'mvc-tree/lib/svg-layout/environment';
import { getBorderPos } from 'mvc-tree/lib/svg-layout/coordinates';
import { generatePathToChild } from 'mvc-tree/lib/svg-layout/path-factory';
import { computeNodeGeometry } from 'mvc-tree/lib/svg-layout/grid-node';
import { buildYearLine } from 'mvc-tree/lib/svg-layout/lines';
import { module, test } from 'qunit';

module('lib:svg-layout no Ember imports');

test('plain modules accept plain objects', function(assert) {
  var geometry = computeNodeGeometry(DEFAULT_SVG_ENV, 0, 1);
  var path = generatePathToChild(DEFAULT_SVG_ENV, {
    col: 0,
    row: 1,
    x: geometry.x,
    y: geometry.y
  }, {
    col: 0,
    row: 2
  });

  assert.equal(path, 'M91 156 v8 h-4 l4 8 l4 -8 h-4');
  assert.deepEqual(getBorderPos(DEFAULT_SVG_ENV, {x: 0, y: 82}, {border: 'bottom'}), {
    x: 91,
    y: 156
  });
  assert.equal(buildYearLine({
    yearLineFontSize: 12,
    rowH: 60,
    viewBoxW: 30
  }, 1514, 1).path, 'M48 60 H30');
});
