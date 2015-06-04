import Ember from 'ember';
import PathFactory from '../mixins/path-factory';

export default Ember.Controller.extend(PathFactory, {

  svgenv: Ember.inject.service('svg-environment'),

  gridNodes: Ember.computed('model', {
    get: function() {
      // sortBy() returns Array
      var pArr = this.get('model.dpatterns').sortBy('year'), 
          tArr = this.get('model.technologies').sortBy('year');

      var gridNodes = pArr.concat( tArr ).sort(function(nodeA, nodeB) {
        var a = nodeA.get('year');
        var b = nodeB.get('year');
        if ( a < b ) {
          return -1;
        }
        if ( a > b ) {
          return 1;
        }
        return 0;
      });

      return gridNodes;
    }
  }),

  gridLines: Ember.computed({
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

  yearLines: Ember.computed({
    get: function() {
      // TODO: feed it as JSON 
      return [
        this._buildYearLine(1980, 3),
        this._buildYearLine(1990, 6),
        this._buildYearLine(2000, 15),
        this._buildYearLine(2010, 25)
      ];
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
  pathsToChildren: Ember.computed('model', {
    get: function() {
      var dpatterns = this.get('model.dpatterns'),
          paths = [],
          _this = this;

      dpatterns.forEach(function(node_dpattern) {
        var children = node_dpattern.get('children');
        if ( ! children || ! children.length ) {
          return;
        }

        children.forEach(function(childId) {
          var childNode = _this.store.getById('node-dpattern', childId);
          var path = _this.generatePathToChild(node_dpattern, childNode);
          paths.push(path);
        });
        
      }); 

      return paths;
    }
  }),

  /*
    Generates paths between two nodes.
  */
  pathsBoundNodes: Ember.computed('gridNodes', {
    get: function() {
      var gridNodes = this.get('gridNodes'),
          paths = [],
          _this = this;

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
