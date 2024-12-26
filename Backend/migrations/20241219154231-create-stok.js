'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stoklar', {
      urunid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      urunadi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tedarikciid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      adet: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      alişfiyat: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      satişfiyat: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Stoks');
  }
};