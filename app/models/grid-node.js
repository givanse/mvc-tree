import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),  
  year: DS.attr('number'),  
  col: DS.attr('number'), 
  row: DS.attr('number'), 
  template: DS.attr('string'),  

  // added localy
  x: DS.attr('number'),
  y: DS.attr('number'),
  x_padded: DS.attr('number'),
  y_padded: DS.attr('number'),
  rx: DS.attr('number'),
  ry: DS.attr('number'),
  cx: DS.attr('number'),
  cy: DS.attr('number'),
  width: DS.attr('number'),
  height: DS.attr('number')
});
