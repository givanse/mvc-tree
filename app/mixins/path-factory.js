import Mixin from '@ember/object/mixin';
import CoordinatesFactory from './coordinates-factory';

/* Meant to be used only by controllers/objects that have an svgenv property. */
export default Mixin.create(CoordinatesFactory, {

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

  /*
    generate Horizontal Path Parent to Corner
  */
  _genHPathP2C(hDelta, vDelta) {
    var colW = this.get('svgenv.colW'),
        isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
        length = isEnoughSpace ? (colW / 2) : 0;

    return length ? 'h' + length : '';
  },

  /*
    generate Horizontal Path Corner to Child
  */
  _genHPathC2Ch(hDelta, vDelta) {
    var colW = this.get('svgenv.colW'),
        isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
        length = isEnoughSpace ? (colW / 2) : 0;

    length = hDelta === 0 ? length * -1 : length;

    return length ? 'h' + length : '';
  },

  /*
    generate Vertical Path Node to Corner
  */
  _genVPathN2C(hDelta, vDelta) {
    if ( hDelta < 2 && vDelta === 0 ) {
      return null;
    }
    var length = this.get('svgenv.rowH') / 2;
    if ( vDelta < 0 ) {
      return 'v-' + length;
    }
    return 'v' + length;
  },

  /*
    generate Vertical Path Corner to Node
  */
  _genVPathC2N(hDelta, vDelta) { // TODO: unit test
    if ( hDelta > 1 ) {
      return vDelta < 1 ? 'v-' + (this.get('svgenv.rowH') / 2) :
                             'v'  + (this.get('svgenv.rowH') / 2);
    } else if ( hDelta === 0 ) {
      if ( vDelta !== 0 ) {
        return vDelta < 1 ? 'v-' + (this.get('svgenv.rowH') / 2) :
                               'v'  + (this.get('svgenv.rowH') / 2);
      }
    } else if ( hDelta === 1 ) {
      if ( vDelta !== 0 ) {
        return vDelta < 1 ? 'v-' + (this.get('svgenv.rowH') / 2) :
                               'v'  + (this.get('svgenv.rowH') / 2);
      }
    }
    return null;
  },

  /*
    @param {number} col1 
    @param {number} row1 
    @param {number} col2 
    @param {number} row2 
   */
  _genPathC2C(col1, row1, col2, row2) {
    if ( col1 === col2 && row1 === row2) {
      return null;
    }

    var hDelta = this._calcHDelta(col1, col2), 
        vDelta = this._calcVDelta(row1, row2);

    if ( ! hDelta && ! vDelta) {
      return null;
    }

    var svgenv = this.get('svgenv'), 
        colW = svgenv.get('colW'),
        rowH = svgenv.get('rowH'),

        hDir = this._calcHDir(col1, col2), 
        vDir = this._calcVDir(row1, row2);

    var h = colW * hDelta * hDir,
        v = rowH * vDelta * vDir;

    h = h ? 'h' + h : '';
    v = v ? 'v' + v : '';

    return h && v ? h + ' ' + v : h + v;
  },

  _getHMultC2C: function(hDelta) {
    if ( hDelta <= 1 ) {
      return 0;
    } else {
      return hDelta - 1;
    }
  },

  _getVMultC2C: function(vDelta) {
    if ( vDelta === 0 || vDelta === 1 ) {
      return 0;
    }
    if ( vDelta === 2 ) {
      return 1;
    }
    if ( vDelta === -2 ) {
      return -1;
    }
    var isNegative = vDelta < 0;
    return isNegative ? vDelta + 1 : vDelta - 1;
  },

  /*
    Asumes a left to right direction.
  */
  _genPathC2CR: function(hDelta, vDelta) {
    var hMult = this._getHMultC2C(hDelta);
    var vMult = this._getVMultC2C(vDelta);

    if ( ! hMult && ! vMult ) {
      return null;
    }

    var h = hMult * this.get('svgenv.colW');
    var v = vMult * this.get('svgenv.rowH');
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

  /*
    Adds two stems:
      1. first stem goes underneath the parent
      2. second stem goes above the child 
  */
  generatePathToChild: function(a, b) {
    var col1 = parseInt(a.get('col')), 
        row1 = parseInt(a.get('row')),
        col2 = parseInt(b.get('col')), 
        row2 = parseInt(b.get('row'));
 
    if ( col1 === col2 && row1 === row2) {
      return '';
    }

    var pathRoot = this.getBorderPos(a, {border: 'bottom'});

    var hDelta = Math.abs(col1 - col2),
        vDelta = Math.abs(row1 - row2);

    var pathP2C = this._genHPathP2C(hDelta, vDelta);
    var pathC2C = this._genPathC2C(col1, row1, col2, row2);
    var pathC2Ch = this._genHPathC2Ch(hDelta, vDelta);

    pathP2C = pathP2C ? pathP2C + ' ' : ''; 
    pathC2C = pathC2C ? pathC2C + ' ' : ''; 
    pathC2Ch = pathC2Ch ? pathC2Ch + ' ' : '';

    return 'M' + pathRoot.x + ' ' + pathRoot.y + ' ' +
           'v' + this.get('svgenv.paddingB') + ' ' +
           pathP2C + pathC2C + pathC2Ch +
           this._genChildArrow();
  },

  /*
    @method _orderNodes 
    @param {model:grid-node} a 
    @param {model:grid-node} b 
    @return {a: grid-node, b: grid-node} | null 
  */
  _orderNodes(a, b) {
    var aCol = a.get('col'),
        aRow = a.get('row'),
        bCol = b.get('col'),
        bRow = b.get('row');

    // nodes with the same position
    if ( aCol === bCol && aRow === bRow) { 
      return null;
    }

    // switch, we want left->right
    if ( ( aCol > bCol ) || ( aCol === bCol && aRow > bRow ) ) {
      var tmpNode = b;
      b = a;
      a = tmpNode;
    }

    return {a: a, b: b};
  },

  /*
    @method generateBindingPath 
    @param {model:grid-node} a 
    @param {model:grid-node} b 
    @return {String} SVG path 
  */
  generateBindingPath: function(a, b) {
    var orderedNodes = this._orderNodes(a, b);

    if ( ! orderedNodes ) {
      return null;
    }

    a = orderedNodes.a;
    b = orderedNodes.b;

    var hDelta = b.get('col') - a.get('col'),
        vDelta = b.get('row') - a.get('row');

    var paddingR = this.get('svgenv.paddingR');
    var pathN2C = this._genVPathN2C(hDelta, vDelta); 
    var pathC2C = this._genPathC2CR(hDelta, vDelta); 
    var pathC2N = this._genVPathC2N(hDelta, vDelta);
    var paddingL = this.get('svgenv.paddingL');

    var padRight = paddingR ? 'h' + paddingR + ' ' : '';
    pathN2C = pathN2C ? pathN2C + ' ' : ''; 
    pathC2C = pathC2C ? pathC2C + ' ' : ''; 
    pathC2N = pathC2N ? pathC2N : ''; 
    var padLeft = paddingL ? ' h' + paddingL : '';

    var path = padRight + pathN2C + pathC2C + pathC2N + padLeft;
    var pathRoot = this.getBorderPos(a, {border: 'right'});
    return path ? 'M' + pathRoot.x + ' ' + pathRoot.y + ' ' + path : null;
  }

});
