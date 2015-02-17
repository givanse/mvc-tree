import Ember from 'ember';
import TreeNode from '../mixins/tree-node';

export default Ember.View.extend(TreeNode, {

  tagName: 'g'

});
