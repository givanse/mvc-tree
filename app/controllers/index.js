import Ember from 'ember';
import PathFactory from '../mixins/path-factory';

export default Ember.Controller.extend(PathFactory, {

  gridNodes: function() {
    // sortBy() returns Array
    var pArr = this.get('model.dpatterns').sortBy('year'), 
        tArr = this.get('model.technologies').sortBy('year');

    Ember.assert('model.dpatterns should not be empty', pArr.length);
    Ember.assert('model.technologies should not be empty', tArr.length);

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

    Ember.assert('gridNodes should not be empty', gridNodes.length);

    return gridNodes;
  }.property('model'),

  gridLines: function() {
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
  }.property(),

  yearLines: function() {
    return [
      this._buildYearLine(1980, 2),
      this._buildYearLine(1990, 5),
      this._buildYearLine(2000, 9),
      this._buildYearLine(2010, 13)
    ];
  }.property(),

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
  pathsToChildren: function() {
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
  }.property('model'),

  /*
    Generates paths between two nodes.
  */
  pathsBoundNodes: function() {
    var gridNodes = this.get('gridNodes'),
        paths = [],
        _this = this;

    gridNodes.forEach(function(node_dpattern) {
      var rNodes = node_dpattern.get('related');

      if ( ! rNodes || ! rNodes.get('length') ) {
        return;
      }

      rNodes.forEach(function(node) {
        var path = _this.generateBindingPath(node_dpattern, node);
        paths.push(path);
      });

    }); 

    return paths;
  }.property('gridNodes')

});
