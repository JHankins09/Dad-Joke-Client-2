'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetJoke = () => {
  event.preventDefault()
  console.log('Begin being funny!')
  api.getJoke()
    .then(ui.getJokeSuccess)
    .catch(console.error)
}

module.exports = {
  onGetJoke
}
