import EmberObject from '@ember/object';

import { module, test } from 'qunit';

import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Model | node-technology', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    var model = run(() => this.owner.lookup('service:store').createRecord('node-technology', {
      svgenv: EmberObject.create()
    }));
    // var store = this.store();
    assert.ok(!!model);
  });

  test('set template name', function(assert) {
    var model = run(() => this.owner.lookup('service:store').createRecord('node-technology', { 
      id: 'foobar',
      svgenv: EmberObject.create()
    }));

    assert.equal(model.get('template'), 'technologies/foobar');
  });
});
