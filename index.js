
'use strict'

module.exports.ombred = require('./lib/ombred-rpc.js')
module.exports.ombreService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/ombred-rpc.js')
