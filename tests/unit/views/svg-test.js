import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('view:svg');

test('it exists', function(assert) {
  var view = this.subject();
  assert.ok(view);
});

test('calcViewBox', function(assert) {
  var view = this.subject(),
      tc = {
        colW: 10,
        rowH: 5,
        maxCols: 10,
        maxRows: 10
      };
  view.set('treeConfig', tc);
  tc = view.get('treeConfig');
  
  assert.equal(tc.viewBoxW, 100);
  assert.equal(tc.viewBoxH, 50);
});

test('gridLines', function(assert) {
  var view = this.subject(),
      tc = {
        colW: 40, rowH: 50,
        maxCols: 1, maxRows: 1
      };
  view.set('treeConfig', tc);
  var gridLines = [
    'M0 0 V50 Z',
    'M0 0 H40 Z',
  ];
  assert.deepEqual(view.get('gridLines'), gridLines, '1x1');

  tc = {
    colW: 20, rowH: 30,
    maxCols: 2, maxRows: 2
  };
  view.set('treeConfig', tc);
  gridLines = [
    'M0 0 V60 Z',
    'M20 0 V60 Z',
    'M0 0 H40 Z',
    'M0 30 H40 Z',
  ];
  assert.deepEqual(view.get('gridLines'), gridLines, '2x2');

  tc = {
    colW: 0, rowH: 0,
    maxCols: 2, maxRows: 2
  };
  view.set('treeConfig', tc);
  gridLines = [];
  assert.deepEqual(view.get('gridLines'), gridLines, 'colW and rowH are 0');
});

test('_buildYearLine', function(assert) {
  var view = this.subject(),
      tc = {
        colW: 30, rowH: 60,
        maxCols: 1, maxRows: 1,
        yearLineFontSize: 12
      };
  view.set('treeConfig', tc);

  var yearLine = {year: 1514, x: 24, y: 0,
                  path: 'M48 0 H30'};
  assert.deepEqual(view._buildYearLine(1514, 0, tc), yearLine);

  yearLine = {year: 1514, x: 24, y: 60,
              path: 'M48 60 H30'};
  assert.deepEqual(view._buildYearLine(1514, 1, tc), yearLine);
});
