import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'mvc-tree/tests/helpers/start-app';

var application;

// 13 node-dpattern records in app/jsons/node-dpatterns.js (not 15).
var PATTERN_GROUP_IDS = [
  'tmve',
  'mvc79',
  'pac',
  'mvc-kp',
  'am',
  'observer',
  'data_binding',
  'mvp',
  'model2',
  'mva',
  'pm',
  'mvvm',
  'mvw'
];

module('Acceptance: Index viz smoke', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('svg tree, pattern groups, and year lines', function(assert) {
  visit('/');

  andThen(function() {
    var tree = find('#mvc_tree')[0];
    assert.ok(tree, '#mvc_tree exists');
    assert.equal(tree.tagName.toLowerCase(), 'svg', '#mvc_tree is an svg');

    PATTERN_GROUP_IDS.forEach(function(id) {
      assert.ok(find('.g_' + id).length > 0, 'pattern group .g_' + id);
    });

    var yearText = find('.year_line_txt').text();
    ['1980', '1990', '2000', '2010'].forEach(function(year) {
      assert.ok(yearText.indexOf(year) !== -1, 'year line ' + year);
    });
  });
});
