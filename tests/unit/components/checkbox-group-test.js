import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('checkbox-group', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: ['view:overlay-checkbox',
          'template:overlay-checkbox']
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
