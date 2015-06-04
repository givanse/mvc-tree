import Ember from 'ember';
import DS from 'ember-data';
import GridNode from './grid-node';

export default GridNode.extend({

  classNames: DS.attr(),

  related: DS.hasMany('grid-node', {polymorphic: true, async: true}), 

  _template: Ember.computed('ready', function() {
    var template = 'technologies/' + this.get('id');
    this.set('template', template);
  })

});
