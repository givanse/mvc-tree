import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Index', {
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
// for now its good enough

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

test('TMVE', function(assert) {
  visit('/');

  var $panel = find('#tmve');
  assert.ok( ! $panel.isInView(), 'panel is not visible on screen');

  click('svg .g_tmve');


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

test('click select', function(assert) {
  visit('/#tmve');

  var $select = find('#tmve .ember-select'),
      $compareToList = find('#tmve .compare_to');
  assert.ok( ! $compareToList.children().length, 'empty list');

  fillIn('#tmve .ember-select', 'mvc79');

  andThen(function() {
    assert.ok( !! $compareToList.children().length, 'populated list');
  });
});

