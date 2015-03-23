import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({
  classNames: DS.attr(),
  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 
});
