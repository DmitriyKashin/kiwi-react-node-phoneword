const NodeCache = require( "node-cache" )
myCache = new NodeCache({ stdTTL: 3000, checkperiod: 3000} )
module.exports = myCache