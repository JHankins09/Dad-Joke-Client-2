'use strict'

const events = require('./events')

let jokeCount = 0
let jumbotronDisplayed = false
const jokesUsed = []

const getJokeSuccess = (response) => {
  jokeCount += 1
  if (jokeCount === 1) {
    $('#jokeA').html('<h1> Joke ' + jokeCount + ': <hr>' + response.joke + '<h1>')
    $('.primary').fadeOut(750)
    $('#jokeA').delay(750).fadeIn(750)
  } else if ((jokeCount + 1) % 2 === 1) {
    $('#jokeB').html('<h1> Joke ' + jokeCount + ': <hr>' + response.joke + '<h1>')
    $('#jokeA').fadeOut(750)
    $('#jokeB').delay(750).fadeIn(750)
  } else {
    $('#jokeA').html('<h1> Joke ' + jokeCount + ': <hr>' + response.joke + '<h1>')
    $('#jokeB').fadeOut(750)
    $('#jokeA').delay(750).fadeIn(750)
  }
}

const displayJumbotron = () => {
  if (!jumbotronDisplayed) {
    $('.jumbotron-container').fadeIn(750)
    jumbotronDisplayed = true
  }
}

const closeJumbotron = () => {
  if (jumbotronDisplayed) {
    $('.jumbotron-container').fadeOut(750)
    jumbotronDisplayed = false
  }
}

const checkJoke = (joke) => {
  if (jokesUsed.includes(joke.id)) {
    events.getNewJoke()
  } else {
    jokesUsed.push(joke.id)
    return joke
  }
}

module.exports = {
  checkJoke,
  closeJumbotron,
  displayJumbotron,
  getJokeSuccess,
  jumbotronDisplayed
}
