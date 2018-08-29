const express = require('express')
const hbs = require('express-handlebars')
const userRoutes = require('./routes/maori_words')
const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', userRoutes)

module.exports = server

// const path = require('path')
// const express = require('express')
// const bodyParser = require('body-parser')

// const server = express()

// server.use(bodyParser.json())
// server.use(express.static(path.join(__dirname, '../public')))

// module.exports = server