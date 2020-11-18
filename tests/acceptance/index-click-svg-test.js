import { click, fillIn, currentURL, currentPath, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';

module('Acceptance: Index Click SVG', function(/*hooks*/) {

  test('Click the node TMVE', async function(assert) {
    await visit('/');

    var $panel = find('#tmve');
    assert.ok( ! $panel.isInView(), 'panel is not visible on screen');

    await click('svg .g_tmve');

    assert.equal(find('#tmve .compare_to').children().length, 0, 'empty list');

    fillIn('#tmve .visible-sm-block .c-select', 'mvc79')
    .then(function() {
      let result = find('#tmve .compare_to').children().length > 0;
      assert.ok(result, 'definitions list for the selected pattern is populated');
    });

    assert.equal(currentPath(), 'index');
    assert.equal('/'+window.location.hash, '/#tmve');

    assert.notEqual(currentURL(), '/#tmve',
                    'we did not enter this ember route');

    // TODO: enable this test
    // it has to wait for the scroll animation (view:svg-g-click) to finish
    // assert.ok( $panel.isInView(), 'panel is visible on screen');
  });
});
