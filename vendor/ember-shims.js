/* ember-cli 2.11 expects ember-source.paths.shims. ember-source 2.18
   (resolved from ^2.11) ships shims but does not export that path, so
   loader.js never gets an `ember` module. This is the one registration
   this app needs (`import Ember from 'ember'`). */
(function() {
  define('ember', [], function() {
    return { 'default': Ember };
  });
})();
