import Ember from 'ember';
import PathFactory from '../mixins/path-factory';
import { buildGridLines, buildYearLine } from '../lib/svg-layout/lines';

export default Ember.Component.extend(PathFactory, {

  tagName: 'svg',

  elementId: 'mvc_tree',

  attributeBindings: [
    'xmlns',
    'version', 
    'width',
    'height',
    'viewBox', 
    'preserveAspectRatio'
  ],
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
  width: '100%',
  height: '100%',
  viewBox: null,
  preserveAspectRatio: 'xMinYMin',

  init: function() {
    this._super(...arguments);

    this.set('viewBox', this.get('svgenv.viewBox'));
  },

  svgenv: Ember.inject.service('svg-environment'),

  store: Ember.inject.service(),

  gridLines: Ember.computed({
    get: function() {
      return buildGridLines(this.get('svgenv'));
    }
  }),

  yearLines: Ember.computed({
    get: function() {
      let rowDividers = this.get('model.rowDividers');
   
      if (!rowDividers) {
        return [];
      }

      return rowDividers.map(obj => this._buildYearLine(obj.year, obj.row));
    }
  }),

  _buildYearLine: function(year, row) {
    return buildYearLine(this.get('svgenv'), year, row);
  },

  /*
    Generates paths between two nodes.
    The bound nodes have a parent/child relationship.
  */
  pathsToChildren: Ember.computed('model', function() {
    let dpatterns = this.get('model.dpatterns');
    let paths = [];

    if (!dpatterns) {
      return paths;
    }

    dpatterns.forEach(node_dpattern => {
      let children = node_dpattern.get('children');
      if ( ! children || ! children.length ) {
        return;
      }

      children.forEach(childId => {
        let childNode = this.get('store').peekRecord('node-dpattern', childId);
        let path = this.generatePathToChild(node_dpattern, childNode);
        paths.push(path);
      });
    }); 

    return paths;
  }),

  /*
    Generates paths between two nodes.
  */
  pathsBoundNodes: Ember.computed('gridNodes', {
    get: function() {
      var gridNodes = this.get('gridNodes'),
          paths = [],
          _this = this;

      if (!gridNodes) {
        return paths;
      }

      gridNodes.forEach(function(node_dpattern) {
        var rNodes = node_dpattern.get('related');

        if ( ! rNodes || ! rNodes.get('length') ) {
          return;
        }

        rNodes.forEach(function(node) {
          var classNames = node.get('classNames');
          classNames = classNames ? classNames.join(' ') : '';
          var pathObj = {
            path: _this.generateBindingPath(node_dpattern, node),
            classNames: 'line line-dashed ' + classNames
          };
          paths.push(pathObj);
        });

      }); 

      return paths;
    }
  })

});
