import Ember from 'ember';
import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  author: DS.attr('string'),  

  children: DS.attr(), 

  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 

  definitions: DS.attr(), 

  _template: Ember.on('ready', function() {
    var template = 'dpatterns/' + this.get('id');
    this.set('template', template);
  })

});
