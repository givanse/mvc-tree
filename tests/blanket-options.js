/*globals blanket, module */

var options = {
  modulePrefix: "mvc-tree",
  filter: "//.*mvc-tree/.*/",
  antifilter: "//.*(tests|template).*/",
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov']
  }
};

if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
