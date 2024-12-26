const db = require("../config/DBConfig.js");

const Stok = db.sequelize.define("Stok", {
    urunid: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    urunadi: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    tedarikciid: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    adet: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    alişfiyat: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    satişfiyat: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    
});

module.exports = Stok;
