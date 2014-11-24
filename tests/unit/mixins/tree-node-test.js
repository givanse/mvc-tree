import Ember from 'ember';
import TreeNodeMixin from 'mvctree/mixins/tree-node';

module('TreeNodeMixin');

// Replace this with your real tests.
test('it works', function() {
  var TreeNodeObject = Ember.Object.extend(TreeNodeMixin);
  var subject = TreeNodeObject.create();
  ok(subject);
});
