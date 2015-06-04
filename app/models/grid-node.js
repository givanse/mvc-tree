import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  year: DS.attr('number'),
  column: DS.belongsTo('column'),
  row: DS.attr('number'),

  /*
    Added localy
  */

  col: Ember.computed('column', function() {
    return this.get('column.col');
  }),

  template: DS.attr('string'),

  svgenv: Ember.inject.service('svg-environment'),
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

  addNodeValues: Ember.on('ready', function() {
    var svgenv = this.get('svgenv');

    if ( ! svgenv ) {
      throw new Ember.Error('svgenv has not been injected yet');
    }

    // TODO: use uppercase names for absolute values

    // x
    this.set('x', this.get('col') * svgenv.get('colW'));
    this.set('x_padded', svgenv.get('paddingL') + this.get('x'));
    this.set('cx', this.get('x') + (svgenv.get('colW') / 2));
    this.set('width', svgenv.get('colW') - svgenv.get('paddingL') - svgenv.get('paddingR'));
    this.set('rx', this.get('width') / 2);

    // y
    this.set('y', this.get('row') * svgenv.get('rowH'));
    this.set('y_padded', svgenv.get('paddingT') + this.get('y'));
    this.set('cy', this.get('y') + (svgenv.get('rowH') / 2));
    this.set('height', svgenv.get('rowH') - svgenv.get('paddingT') - svgenv.get('paddingB'));
    this.set('ry', this.get('height') / 2);

  })

});
