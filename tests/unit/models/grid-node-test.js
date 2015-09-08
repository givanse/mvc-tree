import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('grid-node', 'Unit | Model | grid-node', {
  // Specify the other units that are required for this test.
  needs: ['model:column']
});

// TODO: an id should not need to be specified in each test

test('it exists', function(assert) {
  let svgenvMock = Ember.Service.extend({});
  this.container.register('service:svg-environment', svgenvMock);
  this.container.injection('model', 'svgenv', 'service:svg-environment');
  
  var model = this.subject({
    id: 0,
    //svgenv: Ember.Service.extend()
  });
  //var store = this.store();
  assert.ok(!!model);
});

test('create node 0,0 padding 15 0 0 10', function(assert) {
  let svgenvMock = Ember.Service.extend({
    colW: 30, rowH: 60,
    paddingT: 15,
    paddingR: 0,
    paddingB: 0,
    paddingL: 10
  });
  this.container.register('service:svg-environment', svgenvMock);
  this.container.injection('model', 'svgenv', 'service:svg-environment');

  var model = this.subject({
    id: 1,
    col: 0, row: 0
  });
  assert.equal(model.get('x'), 0, 'x 0');
  assert.equal(model.get('y'), 0, 'y 0');
  assert.equal(model.get('x_padded'), 10, 'x 10');
  assert.equal(model.get('y_padded'), 15, 'y 15');
  assert.equal(model.get('width'), 20, 'width 20');
  assert.equal(model.get('height'), 45, 'height 45');
  assert.equal(model.get('cx'), 15, 'cx 15');
  assert.equal(model.get('cy'), 30, 'cy 30');
  assert.equal(model.get('rx'), 10, 'rx 10');
  assert.equal(model.get('ry'), 22.5, 'ry 22.5');
});

test('create node 1,1 padding 15 0 0 10', function(assert) {
  let svgenvMock = Ember.Service.extend({
    colW: 30, rowH: 60,
    paddingT: 15,
    paddingR: 0,
    paddingB: 0,
    paddingL: 10
  });
  this.container.register('service:svg-environment', svgenvMock);
  this.container.injection('model', 'svgenv', 'service:svg-environment');

  var model = this.subject({
    id: 2,
    col: 1, row: 1
  });
  assert.equal(model.get('x'), 30, 'x 30');
  assert.equal(model.get('y'), 60, 'y 60');
  assert.equal(model.get('x_padded'), 40, 'x 40');
  assert.equal(model.get('y_padded'), 75, 'y 75');
  assert.equal(model.get('cx'), 45, 'cx 45'); // 30 + 30  / 2
  assert.equal(model.get('cy'), 90, 'cy 90'); // 60 + 60 / 2
});

test('create node 0,0', function(assert) {
  let svgenvMock = Ember.Service.extend({
    colW: 130, rowH: 60,
    paddingT: 12,
    paddingR: 12,
    paddingB: 12,
    paddingL: 12
  });
  this.container.register('service:svg-environment', svgenvMock);
  this.container.injection('model', 'svgenv', 'service:svg-environment');

  var model = this.subject({
    id: 3,
    col: 0, row: 0
  });
  assert.equal(model.get('x'), 0, 'x 0');
  assert.equal(model.get('y'), 0, 'y 0');
  assert.equal(model.get('x_padded'), 12, 'x 12');
  assert.equal(model.get('y_padded'), 12, 'y 12');
  assert.equal(model.get('width'), 106, 'width 106');
  assert.equal(model.get('height'), 36, 'height 36');
  assert.equal(model.get('cx'), 65, 'cx 65');
  assert.equal(model.get('cy'), 30, 'cy 30');
  assert.equal(model.get('rx'), 53, 'rx 53');
  assert.equal(model.get('ry'), 18, 'ry 18');
});
