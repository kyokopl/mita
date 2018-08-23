
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getWords (testConn) {
    const conn = testConn || connection
    return conn('words')
  }

module.exports = {
    getWords : getWords
}