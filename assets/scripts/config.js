'use strict'

let apiUrl
const apiUrls = {
  production: 'https://icanhazdadjoke.com/',
  development: 'https://icanhazdadjoke.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
