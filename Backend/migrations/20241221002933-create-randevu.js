'use strict';

const { name } = require("ejs");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Randevular',{
      
      name : {
          type: DataTypes.STRING,
          allowNull: false,
      },
      startdate : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      finishdate : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      price: {
          type: DataTypes.INTEGER,
          allowNull: false,
          
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tedarikler');
  }
};