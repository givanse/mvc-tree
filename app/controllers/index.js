import Ember from 'ember';
import PathFactory from '../mixins/path-factory';

export default Ember.Controller.extend(PathFactory, {

  sortedNodes: function() {
    var model = this.get('model'),
        // sortBy turns them into arrays too
        p = model.dpatterns.sortBy('year'),
        t = model.technologies.sortBy('year');

    return p.concat( t ).sort(function(a, b) {
      a = a.get('year');
      b = b.get('year');
      if ( a < b ) {
        return -1;
      }
      if ( a > b ) {
        return 1;
      }
      return 0;
    });
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
    var dpatterns = this.get('model.dpatterns'),
        paths = [],
        _this = this;

    dpatterns.forEach(function(node_dpattern) {
      var rNodes = node_dpattern.get('related');
      var gl = rNodes.get('length');
      var a  = rNodes.toArray();

      if ( ! rNodes || ! rNodes.get('length') ) {
        return;
      }

      rNodes.forEach(function(node) {
        var path = _this.generateBindingPath(node_dpattern, node);
        paths.push(path);
      });

    }); 

    return paths;
  }.property('model')

});
