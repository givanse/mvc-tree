import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | svg g', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    //this.set('layoutName', 'svg-g/node-header');

    let node = {
      title: 'test node'
    };
    this.set('node', node); //TODO: why does it need both set and as argument
    await render(hbs`{{svg-g layoutName='svg-g/node-header' node=node}}`);

    let elem = this.$()[0].querySelector('g > text > tspan');
    assert.equal(elem.innerText, 'test node');
  });
});
