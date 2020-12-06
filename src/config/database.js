require('dotenv').config()
module.exports = {
  "development": {
    "username": "postgres",
    "password": "segredo",
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": process.env.DATABASE_URL,
  }
}
