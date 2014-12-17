import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('definitions-showcase', 'DefinitionsShowcaseComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

  setup: function() {
    this.container.register('view:select', Ember.Select);
  }
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender', 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM', 'inDOM');
});
