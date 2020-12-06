const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')

require('./src/db')

app.use(express.static(__dirname+'/public'))

// Middlewares
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send('API - Brito Variedades')
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running.")
})