import EmberObject from '@ember/object';
import CoordinatesFactoryMixin from '../../../mixins/coordinates-factory';
import { module, test } from 'qunit';

module('mixin:coordinates-factory', function() {
  test('it works', function(assert) {
    var CoordinatesFactoryObject = EmberObject.extend(CoordinatesFactoryMixin);
    var subject = CoordinatesFactoryObject.create();
    assert.ok(subject);
  });

  test('getBorderPos', function(assert) {
    var CoordinatesFactoryObject = EmberObject.extend(CoordinatesFactoryMixin);
    var subject = CoordinatesFactoryObject.create({
      svgenv: EmberObject.create({
        colW: 30,
        rowH: 30,
        paddingT: 0,
        paddingR: 0,
        paddingB: 0,
        paddingL: 0,
      }) 
    });

    // padding 0

    // top
    var gridNode = EmberObject.create({x: 0, y: 0});
    var expected = {x: 15, y: 0};
    var options = {border: 'top'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // right 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 30, y: 15};
    options = {border: 'right'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // bottom 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 15, y: 30};
    options = {border: 'bottom'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // left 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 0, y: 15};
    options = {border: 'left'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // padding 7

    subject.svgenv.set('paddingT', 7);
    subject.svgenv.set('paddingR', 7);
    subject.svgenv.set('paddingB', 7);
    subject.svgenv.set('paddingL', 7);

    // top
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 15, y: 7};
    options = {border: 'top'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // right 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 23, y: 15};
    options = {border: 'right'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // bottom 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 15, y: 23};
    options = {border: 'bottom'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);

    // left 
    gridNode = EmberObject.create({x: 0, y: 0});
    expected = {x: 7, y: 15};
    options = {border: 'left'};
    assert.deepEqual(subject.getBorderPos(gridNode, options), expected);
  });
});

