const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Pact World!'))

module.exports = app
