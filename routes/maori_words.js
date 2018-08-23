
const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getWords()
      .then(words => {
        res.render('index', words)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router