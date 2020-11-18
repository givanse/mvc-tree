import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | definitions-showcase', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.setup = function() {
    };
  });

  test('it renders', function(assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.owner.factoryFor('component:definitions-showcase').create();
    assert.equal(component._state, 'preRender', 'preRender');

    // appends the component to the page
    this.render();
    assert.equal(component._state, 'inDOM', 'inDOM');
  });
});
