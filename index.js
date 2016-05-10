'use strict'
var fs = require('fs-extra')
var promisify = require('es6-promisify')
// this will hold all the async functions
fs.async = {}
for (var name in fs) {
  var fn = fs[name]
  if (
    fs.hasOwnProperty(name) &&
    !/(?:S|s)ync|walk|^[A-Z_]/.test(name)
  ) {
    fs.async[name] = fs[name] = promisify(fs[name])
  }
}


module.exports = fs
