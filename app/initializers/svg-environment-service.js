export function initialize(container, application) {
  application.inject('controller', 'svgenv', 'service:svg-environment');
}

export default {
  name: 'svg-environment-service',
  initialize: initialize
};
