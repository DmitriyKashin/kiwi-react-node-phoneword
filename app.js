const express = require('express')
const config = require('config')
const NodeCache = require( "node-cache" )
const app = express()
const PORT = config.get('port') || 5000



myCache = new NodeCache({ stdTTL: 3000, checkperiod: 3000} )

app.use('/api/phonewords', require('./routes/phoneword.routes'))

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
