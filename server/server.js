const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const db = require('./db/db')


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.get('/v1/words', (req, res) => {
    db.getWords()
      .then(words => {
        res.json(words)
      })

})

module.exports = server