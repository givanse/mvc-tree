import Ember from 'ember';

export default Ember.Object.extend({
  showGrid: Mvctree.showGrid,

  paddingT: 6,
  paddingR: 6,
  paddingB: 12,
  paddingL: 6,

  colW: 170 + 12,
  rowH: 64 + 18,

  maxCols: 7,
  maxRows: 22,

  viewBoxW: null,
  viewBoxH: null,
  viewBox: null,

  yearLineFontSize: 12, // from CSS rule .year_line_txt

  _calcViewBox: function() {
    var viewBoxW = this.get('colW') * this.get('maxCols'),
        viewBoxH = this.get('rowH') * this.get('maxRows');

    this.set('viewBoxW', viewBoxW);
    this.set('viewBoxH', viewBoxH);
    this.set('viewBox', '0 0 ' + viewBoxW + ' ' + viewBoxH);
  }.on('init'),

  addNodeValues: function(node) {
    // x
    node.x = node.col * this.colW;
    node.x_padded = this.paddingL + node.x;
    node.cx = node.x + (this.colW / 2);
    node.width = this.colW - this.paddingL - this.paddingR;
    node.rx = node.width / 2;

    // y
    node.y = node.row * this.rowH;
    node.y_padded = this.paddingT + node.y;
    node.cy = node.y + (this.rowH / 2);
    node.height = this.rowH - this.paddingT - this.paddingB;
    node.ry = node.height / 2;

    return node;
  }
 
});
