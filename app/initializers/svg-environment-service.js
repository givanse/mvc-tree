export function initialize(container, application) {
  application.inject('controller', 'svgenv', 'service:svg-environment');
  application.inject('initializer', 'svgenv', 'service:svg-environment');
}

export default {
  name: 'svg-environment-service',
  before: 'preload-data',
  initialize: initialize
};
