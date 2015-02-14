import DS from 'ember-data';

export default DS.Model.extend({
  term: DS.attr('string'), 
  text: DS.attr('string'),
  pattern: DS.belongsTo('node-dpattern')
});
