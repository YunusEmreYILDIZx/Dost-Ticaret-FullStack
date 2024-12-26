'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Muhasebeler',{
      
      urunid : {
          type: DataTypes.STRING,
          allowNull: false,
      },
      urunadi : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      urunkar : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tedarikler');
  }
};