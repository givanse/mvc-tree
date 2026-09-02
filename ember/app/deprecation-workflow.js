import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

/**
 * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
 */
setupDeprecationWorkflow({
  /**
    6.12 suite was green with throwOnUnhandled before the 7.x hop.
    Keep this true so new deprecations fail tests instead of being silenced.
  */
  throwOnUnhandled: true,
  workflow: [
    /* empty: no 6.12 deprecations to silence before Ember 7 */
  ],
});
