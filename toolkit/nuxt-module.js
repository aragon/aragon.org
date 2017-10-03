const path = require('path')

module.exports = function nuxtAragonToolkit() {
  this.addPlugin(path.resolve(__dirname, 'index.js'))
}

module.exports.meta = require('./package.json')
