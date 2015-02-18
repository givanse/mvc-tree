import Ember from 'ember';

export default Ember.View.extend({

  tagName: 'svg',

  elementId: 'mvc_tree',

  templateName: 'svg',

  attributeBindings: ['xmlns',
                      'version', 
                      'width',
                      'height',
                      'viewBox', 
                      'preserveAspectRatio'],
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMinYMin',
  viewBox: null,

  _setViewBox: function() {
    this.set('viewBox', this.get('controller.svgenv.viewBox'));
  }.on('init'),

});
