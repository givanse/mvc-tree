import getProp from './get-prop';
import { getBorderPos } from './coordinates';

// Path-segment math. Algorithm is a line-for-line move of
// app/mixins/path-factory.js — do not "clean up" deltas.

// 1 is right, -1 is left
export function calcHDir(col1, col2) {
  if (col1 === col2) {
    return 1; // when 0, it defaults to the right i.e. 1
  } else {
    return col1 < col2 ? 1 : -1;
  }
}

export function calcVDir(row1, row2) {
  if ( row1 === row2 ) {
    return -1;
  } else {
    // 1 is down, -1 is top
    return row1 < row2 ? 1 : -1;
  }
}

export function calcHDelta(col1, col2) {
  var delta = Math.abs(col1 - col2);
  return delta === 0 ? 0 : delta - 1;
}

export function calcVDelta(row1, row2) {
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
}

/*
  generate Horizontal Path Parent to Corner
*/
export function genHPathP2C(svgenv, hDelta, vDelta) {
  var colW = getProp(svgenv, 'colW'),
      isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
      length = isEnoughSpace ? (colW / 2) : 0;

  return length ? 'h' + length : '';
}

/*
  generate Horizontal Path Corner to Child
*/
export function genHPathC2Ch(svgenv, hDelta, vDelta) {
  var colW = getProp(svgenv, 'colW'),
      isEnoughSpace = hDelta > 0 ? true : vDelta > 1 ? true : false,
      length = isEnoughSpace ? (colW / 2) : 0;

  length = hDelta === 0 ? length * -1 : length;

  return length ? 'h' + length : '';
}

/*
  generate Vertical Path Node to Corner
*/
export function genVPathN2C(svgenv, hDelta, vDelta) {
  if ( hDelta < 2 && vDelta === 0 ) {
    return null;
  }
  var length = getProp(svgenv, 'rowH') / 2;
  if ( vDelta < 0 ) {
    return 'v-' + length;
  }
  return 'v' + length;
}

/*
  generate Vertical Path Corner to Node
*/
export function genVPathC2N(svgenv, hDelta, vDelta) { // TODO: unit test
  if ( hDelta > 1 ) {
    return vDelta < 1 ? 'v-' + (getProp(svgenv, 'rowH') / 2) :
                           'v'  + (getProp(svgenv, 'rowH') / 2);
  } else if ( hDelta === 0 ) {
    if ( vDelta !== 0 ) {
      return vDelta < 1 ? 'v-' + (getProp(svgenv, 'rowH') / 2) :
                             'v'  + (getProp(svgenv, 'rowH') / 2);
    }
  } else if ( hDelta === 1 ) {
    if ( vDelta !== 0 ) {
      return vDelta < 1 ? 'v-' + (getProp(svgenv, 'rowH') / 2) :
                             'v'  + (getProp(svgenv, 'rowH') / 2);
    }
  }
  return null;
}

/*
  @param {number} col1
  @param {number} row1
  @param {number} col2
  @param {number} row2
 */
export function genPathC2C(svgenv, col1, row1, col2, row2) {
  if ( col1 === col2 && row1 === row2) {
    return null;
  }

  var hDelta = calcHDelta(col1, col2),
      vDelta = calcVDelta(row1, row2);

  if ( ! hDelta && ! vDelta) {
    return null;
  }

  var colW = getProp(svgenv, 'colW'),
      rowH = getProp(svgenv, 'rowH'),

      hDir = calcHDir(col1, col2),
      vDir = calcVDir(row1, row2);

  var h = colW * hDelta * hDir,
      v = rowH * vDelta * vDir;

  h = h ? 'h' + h : '';
  v = v ? 'v' + v : '';

  return h && v ? h + ' ' + v : h + v;
}

export function getHMultC2C(hDelta) {
  if ( hDelta <= 1 ) {
    return 0;
  } else {
    return hDelta - 1;
  }
}

export function getVMultC2C(vDelta) {
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
}

/*
  Asumes a left to right direction.
*/
export function genPathC2CR(svgenv, hDelta, vDelta) {
  var hMult = getHMultC2C(hDelta);
  var vMult = getVMultC2C(vDelta);

  if ( ! hMult && ! vMult ) {
    return null;
  }

  var h = hMult * getProp(svgenv, 'colW');
  var v = vMult * getProp(svgenv, 'rowH');
  h = h ? 'h' + h : '';
  v = v ? 'v' + v : '';
  return h && v ? h + ' ' + v : h + v;
}

export function genChildArrow(svgenv) {
  // TODO: maybe replace this with a <marker>
  var paddingT = getProp(svgenv, 'paddingT'),
      halfPT = paddingT / 2;

  return 'h-'+halfPT+' '+
         'l'+halfPT+' '+paddingT+' '+
         'l'+halfPT+' -'+paddingT+' '+
         'h-'+halfPT;
}

/*
  Adds two stems:
    1. first stem goes underneath the parent
    2. second stem goes above the child
*/
export function generatePathToChild(svgenv, a, b) {
  var col1 = parseInt(getProp(a, 'col')),
      row1 = parseInt(getProp(a, 'row')),
      col2 = parseInt(getProp(b, 'col')),
      row2 = parseInt(getProp(b, 'row'));

  if ( col1 === col2 && row1 === row2) {
    return '';
  }

  var pathRoot = getBorderPos(svgenv, a, {border: 'bottom'});

  var hDelta = Math.abs(col1 - col2),
      vDelta = Math.abs(row1 - row2);

  var pathP2C = genHPathP2C(svgenv, hDelta, vDelta);
  var pathC2C = genPathC2C(svgenv, col1, row1, col2, row2);
  var pathC2Ch = genHPathC2Ch(svgenv, hDelta, vDelta);

  pathP2C = pathP2C ? pathP2C + ' ' : '';
  pathC2C = pathC2C ? pathC2C + ' ' : '';
  pathC2Ch = pathC2Ch ? pathC2Ch + ' ' : '';

  return 'M' + pathRoot.x + ' ' + pathRoot.y + ' ' +
         'v' + getProp(svgenv, 'paddingB') + ' ' +
         pathP2C + pathC2C + pathC2Ch +
         genChildArrow(svgenv);
}

/*
  @method orderNodes
  @param {model:grid-node} a
  @param {model:grid-node} b
  @return {a: grid-node, b: grid-node} | null
*/
export function orderNodes(a, b) {
  var aCol = getProp(a, 'col'),
      aRow = getProp(a, 'row'),
      bCol = getProp(b, 'col'),
      bRow = getProp(b, 'row');

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
}

/*
  @method generateBindingPath
  @param {model:grid-node} a
  @param {model:grid-node} b
  @return {String} SVG path
*/
export function generateBindingPath(svgenv, a, b) {
  var orderedNodes = orderNodes(a, b);

  if ( ! orderedNodes ) {
    return null;
  }

  a = orderedNodes.a;
  b = orderedNodes.b;

  var hDelta = getProp(b, 'col') - getProp(a, 'col'),
      vDelta = getProp(b, 'row') - getProp(a, 'row');

  var paddingR = getProp(svgenv, 'paddingR');
  var pathN2C = genVPathN2C(svgenv, hDelta, vDelta);
  var pathC2C = genPathC2CR(svgenv, hDelta, vDelta);
  var pathC2N = genVPathC2N(svgenv, hDelta, vDelta);
  var paddingL = getProp(svgenv, 'paddingL');

  var padRight = paddingR ? 'h' + paddingR + ' ' : '';
  pathN2C = pathN2C ? pathN2C + ' ' : '';
  pathC2C = pathC2C ? pathC2C + ' ' : '';
  pathC2N = pathC2N ? pathC2N : '';
  var padLeft = paddingL ? ' h' + paddingL : '';

  var path = padRight + pathN2C + pathC2C + pathC2N + padLeft;
  var pathRoot = getBorderPos(svgenv, a, {border: 'right'});
  return path ? 'M' + pathRoot.x + ' ' + pathRoot.y + ' ' + path : null;
}
