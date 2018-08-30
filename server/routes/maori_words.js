
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



// // this is an example of a basic router
// //copy or rename this file, but dont build all your routes in here

// const router = require('express').Router()

// // router.get('/', (req, res) => {
// //   dbFile.fbFunction()
// //     .then(result => {
// //       res.json(result)
// //     })
// // })

// module.exports = routerrouter