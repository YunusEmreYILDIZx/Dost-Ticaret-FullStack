'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Tedarikler',{
      
      tedarikciid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tedarikçiadi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      urunid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tedarikler');
  }
};