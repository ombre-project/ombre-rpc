
'use strict'

module.exports.Arqmad = require('./lib/arqmad-rpc.js')
module.exports.ArqmaService = require('./lib/service-rpc.js')

// These exports will be deprecated in a future version.
// Continue to use them at your own risk.
module.exports.Walletd = require('./lib/service-rpc.js')
module.exports.Service = require('./lib/service-rpc.js')
module.exports.Client = require('./lib/arqmad-rpc.js')
