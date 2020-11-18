import EmberObject from '@ember/object';

import { module, test } from 'qunit';

import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('node-header', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    var model = run(
      () => this.owner.lookup('service:store').createRecord('node-header', { svgenv: EmberObject.create() })
    );
    // var store = this.store();
    assert.ok(!!model);
  });
});
