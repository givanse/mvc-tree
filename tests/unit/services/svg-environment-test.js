import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:svg-environment', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('calcViewBox', function(assert) {
  var service = this.subject({
    colW: 10,
    rowH: 5,
    maxCols: 10,
    maxRows: 10
  });
  
  assert.equal(service.viewBoxW, 100);
  assert.equal(service.viewBoxH, 50);
  assert.equal(service.viewBox, '0 0 100 50');
});

test('addNodeValues', function(assert) {
  var service = this.subject({
    colW: 30, rowH: 60,
    paddingT: 15,
    paddingR: 0,
    paddingB: 0,
    paddingL: 10
  });

  var node = service.addNodeValues({col: 0, row: 0});
  assert.equal(node.x, 0, 'x 0');
  assert.equal(node.y, 0, 'y 0');
  assert.equal(node.x_padded, 10, 'x 10');
  assert.equal(node.y_padded, 15, 'y 15');
  assert.equal(node.width, 20, 'width 20');
  assert.equal(node.height, 45, 'height 45');
  assert.equal(node.cx, 15, 'cx 15');
  assert.equal(node.cy, 30, 'cy 30');
  assert.equal(node.rx, 10, 'rx 10');
  assert.equal(node.ry, 22.5, 'ry 22.5');

  node = service.addNodeValues({col: 1, row: 1});
  assert.equal(node.x, 30, 'x 30');
  assert.equal(node.y, 60, 'y 60');
  assert.equal(node.x_padded, 40, 'x 40');
  assert.equal(node.y_padded, 75, 'y 75');
  assert.equal(node.cx, 45, 'cx 45'); // 30 + 30  / 2
  assert.equal(node.cy, 90, 'cy 90'); // 60 + 60 / 2
});

test('addNodeValues', function(assert) {
  var service = this.subject({
    colW: 130, rowH: 60,
    paddingT: 12,
    paddingR: 12,
    paddingB: 12,
    paddingL: 12
  });
  var node = service.addNodeValues({col: 0, row: 0});
  assert.equal(node.x, 0, 'x 0');
  assert.equal(node.y, 0, 'y 0');
  assert.equal(node.x_padded, 12, 'x 12');
  assert.equal(node.y_padded, 12, 'y 12');
  assert.equal(node.width, 106, 'width 106');
  assert.equal(node.height, 36, 'height 36');
  assert.equal(node.cx, 65, 'cx 65');
  assert.equal(node.cy, 30, 'cy 30');
  assert.equal(node.rx, 53, 'rx 53');
  assert.equal(node.ry, 18, 'ry 18');
});
