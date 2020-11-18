import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import PathFactory from '../mixins/path-factory';

export default Component.extend(PathFactory, {

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

  svgenv: service('svg-environment'),

  store: service(),

  gridLines: computed({
    get: function() {
      var svgenv = this.get('svgenv'),
          w = svgenv.viewBoxW,
          h = svgenv.viewBoxH,
          gridLines = [];

      for (var x = 0; x < w; x += svgenv.colW) {
        gridLines.push('M' + x + ' 0 V' + h + ' Z');
      }
      for (var y = 0; y < h; y += svgenv.rowH) {
        gridLines.push('M0 ' + y + ' H' + w + ' Z');
      }

      return gridLines;
    }
  }),

  yearLines: computed({
    get: function() {
      let rowDividers = this.get('model.rowDividers');
   
      if (!rowDividers) {
        return [];
      }

      return rowDividers.map(obj => this._buildYearLine(obj.year, obj.row));
    }
  }),

  _buildYearLine: function(year, row) {
    var svgenv = this.get('svgenv'),
        x = svgenv.yearLineFontSize * 2, 
        y = row * svgenv.rowH,
        xLine = svgenv.yearLineFontSize * 4;

    return {year: year, x: x, y: y,
            path: 'M'+xLine+' '+y+' H' + svgenv.viewBoxW};
  },

  /*
    Generates paths between two nodes.
    The bound nodes have a parent/child relationship.
  */
  pathsToChildren: computed('model', function() {
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
  pathsBoundNodes: computed('gridNodes', {
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
