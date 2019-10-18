'use strict'

const api = require('./api')
const ui = require('./ui')

const getNewJoke = () => {
  api.getJoke()
    .then(ui.checkJoke)
    .then(ui.getJokeSuccess)
    .catch(console.error)
}

const onGetJoke = () => {
  event.preventDefault()
  console.log('Begin being funny!')
  getNewJoke()
}

module.exports = {
  getNewJoke,
  onGetJoke
}
