const Sequelize = require('sequelize')

const Product = require('../model/Product')

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
})

connection
  .authenticate()
  .then(() => console.log('conexão ok'))
  .catch((err) => console.error('houve um problema na conexão', err))

Product.init(connection)

module.exports = connection;