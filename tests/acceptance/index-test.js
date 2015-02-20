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
    assert.equal(currentPath(), 'index');
    // TODO: revisit Ember url fragments support
    // https://github.com/emberjs/ember.js/issues/4098
    //assert.equal('/'+window.location.hash, '/#pac');
    Ember.run.later(function() { // wait for the scroll animation
      assert.ok( $panel.isInView(), 'panel is visible on screen');
    }, 1000);
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
    Ember.run.later(function() { // wait for the scroll animation
      assert.ok( $panel.isInView(), 'panel is visible on screen');
    }, 1000);

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

