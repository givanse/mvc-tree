import Ember from 'ember';
import DS from 'ember-data';
import { computeNodeGeometry } from '../lib/svg-layout/grid-node';

export default DS.Model.extend({

  name: DS.attr('string'),
  year: DS.attr('number'),
  row: DS.attr('number'),

  /*
    Relationships 
  */
  column: DS.belongsTo('column', {async: true}),

  /*
    Added localy
  */

  col: Ember.computed('column', function() {
    return this.get('column.col');
  }),

  template: DS.attr('string'),

  x: DS.attr('number'),
  y: DS.attr('number'),
  x_padded: DS.attr('number'),
  y_padded: DS.attr('number'),
  rx: DS.attr('number'),
  ry: DS.attr('number'),
  cx: DS.attr('number'),
  cy: DS.attr('number'),
  width: DS.attr('number'),
  height: DS.attr('number'),

  svgenv: Ember.inject.service('svg-environment'),

  _addNodeValues: Ember.on('ready', function() {
    var svgenv = this.get('svgenv');

    if ( ! svgenv ) {
      throw new Ember.Error('svgenv has not been injected yet');
    }

    this.setProperties(computeNodeGeometry(svgenv, this.get('col'), this.get('row')));
  })

});
