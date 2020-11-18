import { currentURL, currentPath, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';

module('Acceptance: Index#hash', function(hooks) {
  //TODO: avoid using run.later() by adding an async helper that will wait
  // on a promise returned by the svg-g view.
  // http://stackoverflow.com/questions/26498845

  test('visiting /#pac', async function(assert) {
    var $panel = find('#pac');
    assert.ok( ! $panel.isInView(), 'panel is not visible on screen');

    await visit('/#pac');

    assert.equal(currentPath(), 'index', 'current path');
    assert.equal(currentURL(), '/#pac', 'current URL');

    // TODO: enable this test
    // it has to wait for the scroll animation (view:svg-g-click) to finish
    // assert.ok( $panel.isInView(), 'panel is visible on screen');
  });
});
