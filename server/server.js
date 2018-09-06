const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const db = require('./db/db')
const request = require('superagent')


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.get('/v1/words', (req, res) => {
  console.log('you hit the server file');
  
    db.getWords()
      .then(words => {
        res.json(words)
      })

})

module.exports = server