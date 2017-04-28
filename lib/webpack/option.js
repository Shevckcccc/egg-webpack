'use strict';
const merge = require('webpack-merge');
class WebpackOption {
  constructor(options) {
    this.options = options;
  }

  setOption(options) {
    this.options = merge(this.options, options);
  }

  setEntry(entry) {
    this.options = merge(this.options, { entry });
  }

  setOutput(options) {
    this.options = merge(this.options, options);
  }

  setExtensions(extensions) {
    this.options = merge(this.options, { resolve: { extensions } });
  }
}

module.exports = WebpackOption;
