const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('port') || 5000


app.use('/api/phonewords', require('./routes/phoneword.routes'))

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
