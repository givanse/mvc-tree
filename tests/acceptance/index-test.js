import { currentPath, visit } from '@ember/test-helpers';
import {
  module,
  test
} from 'qunit';

module('Acceptance: Index', function(hooks) {
  test('visiting / first time', async function(assert) {
    await visit('/');

    assert.equal(currentPath(), 'index');
  });

  test('visiting / second time', async function(assert) {
    await visit('/');

    assert.equal(currentPath(), 'index');
  });
});
