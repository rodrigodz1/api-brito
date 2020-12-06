require('dotenv').config()
module.exports = {
  "development": {
    "dialect": "postgres",
    "host": "localhost",
    "username": "postgres",
    "password": "postgres",
    "database": "postgres2",
    define: {
      timestamps: true,
      underscored: true,
    }
  },
  "production": {
    "use_env_variable": process.env.DATABASE_URL,
  }
}
