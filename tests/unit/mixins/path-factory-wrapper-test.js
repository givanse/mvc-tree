import Ember from 'ember';
import PathFactoryMixin from '../../../mixins/path-factory';
import { module, test } from 'qunit';

module('mixin:path-factory (thin wrapper)');

test('it works', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin);
  var subject = PathFactoryObject.create();
  assert.ok(subject);
});

test('wrapper delegates TMVE -> MVC79 snapshot', function(assert) {
  var PathFactoryObject = Ember.Object.extend(PathFactoryMixin, {
    svgenv: Ember.Object.create({
      paddingT: 8,
      paddingR: 12,
      paddingB: 8,
      paddingL: 12,
      colW: 170 + 12,
      rowH: 64 + 18
    })
  });
  var subject = PathFactoryObject.create();

  var a = Ember.Object.create({
    col: 0,
    row: 1,
    x: 0,
    y: 82
  });
  var b = Ember.Object.create({
    col: 0,
    row: 2
  });

  assert.equal(
    subject.generatePathToChild(a, b),
    'M91 156 v8 h-4 l4 8 l4 -8 h-4'
  );
});
