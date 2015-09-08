import Ember from 'ember';
import {module, test} from 'qunit';
import startApp from 'mvc-tree/tests/helpers/start-app';

var application;

module('Acceptance: Index#hash', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

//TODO: avoid using run.later() by adding an async helper that will wait
// on a promise returned by the svg-g view.
// http://stackoverflow.com/questions/26498845

test('visiting /#pac', function(assert) {
  var $panel = find('#pac');
  assert.ok( ! $panel.isInView(), 'panel is not visible on screen');

  visit('/#pac');

  andThen(function() {
    assert.equal(currentPath(), 'index', 'current path');
    assert.equal(currentURL(), '/#pac', 'current URL');

    // TODO: enable this test
    // it has to wait for the scroll animation (view:svg-g-click) to finish
    // assert.ok( $panel.isInView(), 'panel is visible on screen');
  });
});
