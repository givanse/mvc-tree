import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-g', 'Integration | Component | svg g', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //this.set('layoutName', 'svg-g/node-header');

  let node = {
    title: 'test node'
  };
  this.set('node', node); //TODO: why does it need both set and as argument
  this.render(hbs`{{svg-g layoutName='svg-g/node-header' node=node}}`);

  let elem = this.$()[0].querySelector('g > text > tspan');
  assert.equal(elem.innerText, 'test node');
});
