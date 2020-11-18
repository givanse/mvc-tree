import EmberObject from '@ember/object';

import { module, test } from 'qunit';

import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('node-dpattern', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    var model = run(() => this.owner.lookup('service:store').createRecord('node-dpattern', { 
      svgenv: EmberObject.create()
    }));
    // var store = this.store();
    assert.ok(!!model);
  });

  test('set template name', function(assert) {
    var model = run(() => this.owner.lookup('service:store').createRecord('node-dpattern', { 
      id: 'foobar',
      svgenv: EmberObject.create()
    }));

    assert.equal(model.get('template'), 'dpatterns/foobar');
  });
});
