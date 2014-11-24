import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),  
  year: DS.attr('number'),  
  col: DS.attr('number'), 
  row: DS.attr('number')  
});
