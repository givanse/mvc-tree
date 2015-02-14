import Ember from 'ember';
import TreeNodeMixin from '../../../mixins/tree-node';
import { module, test } from 'qunit';

module('TreeNodeMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var TreeNodeObject = Ember.Object.extend(TreeNodeMixin);
  var subject = TreeNodeObject.create();
  assert.ok(subject);
});
