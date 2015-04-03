import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  classNames: DS.attr(),

  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 

  _template: function() {
    var template = 'technologies/' + this.get('id');
    this.set('template', template);
  }.on('ready')

});
