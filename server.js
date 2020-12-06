const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

require('dotenv').config()
require('./src/db')

app.use(express.static(__dirname+'/public'))

// Middlewares
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send('API - Brito Variedades')
})

app.listen(process.env.PORT || 3001, () => {

  try {
    pool.connect()
  } catch (error) {
    console.log("Falha na conexão: " + error)
  }

  console.log("Server running.")
})