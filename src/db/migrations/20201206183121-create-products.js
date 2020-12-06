'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('products', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       title: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       description: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       price: {
        type: Sequelize.FLOAT,
        allowNull: false,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
       }
      })

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
