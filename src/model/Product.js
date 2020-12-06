const { Model, DataTypes } = require('sequelize')

class Product extends Model {
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
      seller_name: DataTypes.STRING,
      price: DataTypes.FLOAT
    }, {
      sequelize
    })
  }
}

module.exports = Product;