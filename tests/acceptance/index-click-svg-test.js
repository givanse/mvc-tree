import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from 'mvc-tree/tests/helpers/start-app';

var application;

module('Acceptance: Index click SVG', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Click the node TMVE', function(assert) {
  visit('/');

  var $panel = find('#tmve');
  assert.ok( ! $panel.isInView(), 'panel is not visible on screen');

  click('svg .g_tmve');

  assert.equal(find('#tmve .compare_to').children().length, 0, 'empty list');

  fillIn('#tmve .visible-sm-block .ember-select', 'mvc79').then(function() {
    assert.ok(find('#tmve .compare_to').children().length > 0,
              'definitions list is populated');
  });

  andThen(function() {
    assert.equal(currentPath(), 'index');
    assert.equal('/'+window.location.hash, '/#tmve');

    assert.notEqual(currentURL(), '/#tmve', 
                    'we did not enter this ember route');

    // TODO: enable this test
    // it has to wait for the scroll animation (view:svg-g-click) to finish
    // assert.ok( $panel.isInView(), 'panel is visible on screen');
  });
});
