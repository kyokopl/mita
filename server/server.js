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

server.get('/v1/places', (req, res) => {
  db.getPlaces()
    .then(places => {
      res.json(places)
    })
})

module.exports = server