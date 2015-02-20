import Ember from 'ember';

/* Meant to be used only by controllers/objects that have an svgenv property. */
export default Ember.Mixin.create({

  _genVParentStem(a) {
    var svgenv = this.get('svgenv'), 
        x = a.get('cx'),
        y = a.get('y_padded') + a.get('height');

    return 'M'+x+' '+y+' '+
           'v'+svgenv.get('paddingB');
  },

  // 1 is right, -1 is left
  _calcHDir: function(col1, col2) {
    if (col1 === col2) {
      return 1; // when 0, it defaults to the right i.e. 1
    } else {
      return col1 < col2 ? 1 : -1;
    }
  },

  _calcVDir: function(row1, row2) {
    if ( row1 === row2 ) {
      return -1;
    } else {
      // 1 is down, -1 is top 
      return row1 < row2 ? 1 : -1;
    }
  },

  _calcHDelta: function(col1, col2) {
    var delta = Math.abs(col1 - col2); 
    return delta === 0 ? 0 : delta - 1;
  },

  _calcVDelta: function(row1, row2) {
    if ( row1 === row2 ) {
      return 1;
    } else {
      var delta = Math.abs(row1 - row2);
      if (delta === 1) {
        return row1 < row2 ? 0 : 2; 
      } else {
        return delta - 1;
      }
    }
  },

  _genHParentPath2C(hDelta, vDelta) {
    var colW = this.get('svgenv.colW'),
        isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
        length = isEnoughSpace ? (colW / 2) : 0;

    return length ? 'h' + length : '';
  },

  _genHChildPath2C(hDelta, vDelta) {
    var colW = this.get('svgenv.colW'),
        isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
        length = isEnoughSpace ? (colW / 2) : 0;

    length = hDelta === 0 ? length * -1 : length;

    return length ? 'h' + length : '';
  },

  /*
    (x, y) - where the path starts from
    (col1, row1)
    (col2, row2)
   */
  _genPathC2C(x, y, col1, row1, col2, row2) {
    if ( col1 === col2 && row1 === row2) {
      return '';
    }

    var svgenv = this.get('svgenv'), 
        colW = svgenv.get('colW'),
        rowH = svgenv.get('rowH'),

        hDelta = this._calcHDelta(col1, col2), 
        vDelta = this._calcVDelta(row1, row2),

        hDir = this._calcHDir(col1, col2), 
        vDir = this._calcVDir(row1, row2);

    var h = colW * hDelta * hDir,
        v = rowH * vDelta * vDir;

    h = h ? 'h' + h : '';
    v = v ? 'v' + v : '';

    return h && v ? h + ' ' + v : h + v;
  },

  _genChildArrow() {
    // TODO: maybe replace this with a <marker>
    var svgenv = this.get('svgenv'), 
        paddingT = svgenv.get('paddingT'),
        halfPT = paddingT / 2;

    return 'h-'+halfPT+' '+
           'l'+halfPT+' '+paddingT+' '+
           'l'+halfPT+' -'+paddingT+' '+
           'h-'+halfPT;
  },

  generatePathToChild: function(a, b) {
    var col1 = parseInt(a.get('col')), 
        row1 = parseInt(a.get('row')),
        col2 = parseInt(b.get('col')), 
        row2 = parseInt(b.get('row'));
 
    if ( col1 === col2 && row1 === row2) {
      return '';
    }

    var x = a.get('cx'),
        y = a.get('y') + this.get('svgenv.rowH');

    var hDelta = Math.abs(col1 - col2),
        vDelta = Math.abs(row1 - row2);

    var pp2c = this._genHParentPath2C(hDelta, vDelta), 
        pc2c = this._genPathC2C(x, y, col1, row1, col2, row2),
        cp2c = this._genHChildPath2C(hDelta, vDelta);

    pp2c = pp2c ? pp2c + ' ' : ''; 
    pc2c = pc2c ? pc2c + ' ' : ''; 
    cp2c = cp2c ? cp2c + ' ' : '';

    return this._genVParentStem(a) + ' ' +
           pp2c + pc2c + cp2c +
           this._genChildArrow();
  }

});
