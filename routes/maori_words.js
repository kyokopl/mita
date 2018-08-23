
const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getWords()
      .then(words => {
        res.render('index', {words: words})
      })
  })

module.exports = router