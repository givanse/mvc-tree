import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('definitions-showcase', {
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
