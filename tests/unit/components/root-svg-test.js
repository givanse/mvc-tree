import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('root-svg', 'Unit | Component | root-svg', {
  unit: true,
  setup: function() {
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender', 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM', 'inDOM');
});

test('gridLines 1x1', function(assert) {
  var component = this.subject({
    svgenv: {
      colW: 40, rowH: 50,
      maxCols: 1, maxRows: 1,
      viewBoxW: 40, viewBoxH: 50,
    }
  });

  var gridLines = [
    'M0 0 V50 Z',
    'M0 0 H40 Z',
  ];
  assert.deepEqual(component.get('gridLines'), gridLines, '1x1');
});

test('gridLines 2x2', function(assert) {
  var component = this.subject({
    svgenv: {
      colW: 20, rowH: 30,
      maxCols: 2, maxRows: 2,
      viewBoxW: 40, viewBoxH: 60
    }
  });
  var gridLines = [
    'M0 0 V60 Z',
    'M20 0 V60 Z',
    'M0 0 H40 Z',
    'M0 30 H40 Z',
  ];
  assert.deepEqual(component.get('gridLines'), gridLines, '2x2');
});

test('gridLines 0x0', function(assert) {
  var component = this.subject({
    svgenv: {
      colW: 0, rowH: 0,
      maxCols: 2, maxRows: 2,
      viewBoxW: 0, viewBoxH: 0
    }
  });
  var gridLines = [];
  assert.deepEqual(component.get('gridLines'), gridLines, 'colW and rowH are 0');
});

test('_buildYearLine', function(assert) {
  var component = this.subject({
    svgenv: {
      colW: 30, rowH: 60,
      maxCols: 1, maxRows: 1,
      viewBoxW: 30, viewBoxH: 60,
      yearLineFontSize: 12
    }
  });

  var yearLine = {year: 1514, x: 24, y: 0,
                  path: 'M48 0 H30'};
  assert.deepEqual(component._buildYearLine(1514, 0), yearLine);

  yearLine = {year: 1514, x: 24, y: 60,
              path: 'M48 60 H30'};
  assert.deepEqual(component._buildYearLine(1514, 1), yearLine);
});
