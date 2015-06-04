import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'mvc-tree/tests/helpers/start-app';

var application;

module('Acceptance: Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    // TODO: remove this workaround
    // https://github.com/givanse/mvc-tree/issues/2
/*
    var store = application.__container__.lookup('store:application');
    Ember.run(function() {
      var arr1 = store.all('node-technology').toArray();
      var arr2 = store.all('node-dpattern').toArray();
      var arr3 = store.all('node-header').toArray();
      var arr4 = store.all('column').toArray();
      arr1.concat(arr2).concat(arr3).concat(arr4).forEach(function(record) {
        store.unloadRecord(record);
      });
    });
*/
    Ember.run(application, 'destroy');
  }
});

test('visiting / first time', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});

test('visiting / second time', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});
