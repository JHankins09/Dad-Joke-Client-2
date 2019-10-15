'use strict'

const config = require('./config.js')

const getJoke = () => {
  return $.ajax({
    url: config.apiUrl,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
}

module.exports = {
  getJoke
}
