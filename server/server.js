const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')
const words = require('./routes/maori_words')
const server = express()

// server.use(cors('*'))
server.use('/v1/words', words)
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//server.use('/api/path', require('./path/to/router'))

module.exports = server