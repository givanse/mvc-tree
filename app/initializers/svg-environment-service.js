export function initialize(container, application) {
  application.inject('controller', 'svgenv', 'service:svg-environment');
  application.inject('model', 'svgenv', 'service:svg-environment');
}

export default {
  name: 'svg-environment-service',
  after: ['ember-data', 'store'], 
  initialize: initialize
};
