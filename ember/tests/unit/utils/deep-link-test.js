import { module, test } from 'qunit';
import { parseDeepLink } from 'mvc-tree/utils/deep-link';

module('Unit | utils/deep-link', function () {
  test('reads a bare hash id', function (assert) {
    assert.deepEqual(parseDeepLink({ hash: '#tmve' }), {
      id: 'tmve',
      compareTo: '',
    });
  });

  test('reads compare-to from a hash query', function (assert) {
    assert.deepEqual(parseDeepLink({ hash: '#mvp?c=mvvm' }), {
      id: 'mvp',
      compareTo: 'mvvm',
    });
  });

  test('reads compare-to from location.search', function (assert) {
    assert.deepEqual(parseDeepLink({ hash: '#mvp', search: '?c=mvvm' }), {
      id: 'mvp',
      compareTo: 'mvvm',
    });
  });
});
