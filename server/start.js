'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const favicon = require('serve-favicon');
const path = require('path')

const pkg = require('../package.json')

const app = express()

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(require('volleyball'))
}

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use(favicon(path.join(__dirname, "..", 'public', 'favicon.ico')))
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) // Send index.html for any other requests.


if (module === require.main) {
  // Start listening only if we're the main module.

  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      console.log(`Listening on ${JSON.stringify(server.address())}`)
    }
  )
}
