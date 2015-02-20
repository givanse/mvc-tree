import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({
  author: DS.attr('string'),  
  children: DS.attr(), 
  //TODO: 
  //definitions: DS.hasMany('definition')  
  definitions: DS.attr()  
});
