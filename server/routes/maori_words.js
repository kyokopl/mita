
const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
    db.getWords()
      .then(words => {
        res.json(words)
      })
  })

module.exports = router