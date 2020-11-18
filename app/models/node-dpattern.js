import { on } from '@ember/object/evented';
import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  author: DS.attr('string'),  

  children: DS.attr(), 

  definitions: DS.attr(), 

  // relationships

  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 

  // local

  _template: on('ready', function() {
    var template = 'dpatterns/' + this.get('id');
    this.set('template', template);
  })

});
