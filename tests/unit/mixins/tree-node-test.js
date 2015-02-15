import Ember from 'ember';
import TreeNodeMixin from '../../../mixins/tree-node';
import { module, test } from 'qunit';

module('TreeNodeMixin');

test('it works', function(assert) {
  var TreeNodeObject = Ember.Object.extend(TreeNodeMixin);
  var subject = TreeNodeObject.create();
  assert.ok(subject);
});

test('_x, _y', function(assert) {
  var TreeNodeObject = Ember.Object.extend(TreeNodeMixin),
      subject = TreeNodeObject.create(),
      tc = {colW: 30, rowH: 60,
            paddingT: 15,
            paddingR: 0,
            paddingB: 0,
            paddingL: 10};
  subject.set('treeConfig', tc);

  subject.set('elem', {col: 0, row: 0});
  assert.equal(subject.get('x'), 10, 'x 10');
  assert.equal(subject.get('y'), 15, 'y 15');
  assert.equal(subject.get('width'), 20, 'width 20');
  assert.equal(subject.get('height'), 45, 'height 45');
  assert.equal(subject.get('cx'), 15, 'cx 15');
  assert.equal(subject.get('cy'), 30, 'cy 30');
  assert.equal(subject.get('rx'), 10, 'rx 10');
  assert.equal(subject.get('ry'), 22.5, 'ry 22.5');

  subject.set('elem', {col: 1, row: 1});
  assert.equal(subject.get('x'), 40, 'x 40');
  assert.equal(subject.get('y'), 75, 'y 75');
  assert.equal(subject.get('cx'), 45, 'cx 45'); // 30 + 30  / 2
  assert.equal(subject.get('cy'), 90, 'cy 90'); // 60 + 60 / 2

  tc = {colW: 130, rowH: 60,
        paddingT: 12,
        paddingR: 12,
        paddingB: 12,
        paddingL: 12};
  subject.set('treeConfig', tc);
  subject.set('elem', {col: 0, row: 0});
  assert.equal(subject.get('x'), 12, 'x 12');
  assert.equal(subject.get('y'), 12, 'y 12');
  assert.equal(subject.get('width'), 106, 'width 106');
  assert.equal(subject.get('height'), 36, 'height 36');
  assert.equal(subject.get('cx'), 65, 'cx 65');
  assert.equal(subject.get('cy'), 30, 'cy 30');
  assert.equal(subject.get('rx'), 53, 'rx 53');
  assert.equal(subject.get('ry'), 18, 'ry 18');

});
