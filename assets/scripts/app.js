'use strict'

const events = require('./events')
const ui = require('./ui')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Event Listener Goes Here:
  $('.secondary').on('click', function () {
    events.onGetJoke()
  })
  $('.jbt-button').on('click', function () {
    ui.displayJumbotron()
  })
  $('.close-out').on('click', function () {
    ui.closeJumbotron()
  })
  $('.mob-close-out').on('click', function () {
    ui.closeJumbotron()
  })
})
