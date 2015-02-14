import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('definitions-showcase', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

  setup: function() {
    // TODO: fix deprecation
    //this.container.register('view:select', Ember.Select);
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
