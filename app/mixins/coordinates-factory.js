import Ember from 'ember';

export default Ember.Mixin.create({

  getBorderPos: function(gridNode, options) {
    var x = gridNode.get('x');
    var y = gridNode.get('y');
    var colW = this.get('svgenv.colW');
    var rowH = this.get('svgenv.rowH');

    switch( options.border ) {
      case 'top':
        x += colW / 2;
        y += this.get('svgenv.paddingT');
        break;
      case 'right':
        x += colW;
        x -= this.get('svgenv.paddingR');
        y += rowH / 2;
        break;
      case 'bottom':
        x += colW / 2;
        y += rowH;
        y -= this.get('svgenv.paddingB');
        break;
      case 'left':
        x += this.get('svgenv.paddingL');
        y += rowH / 2;
        break;
      default:
        return null;
    }

    return {x: x, y: y};
  }

});
