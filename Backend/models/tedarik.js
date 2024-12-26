const db = require("../config/DBConfig.js");
const DataTypes = db.Sequelize;

const Tedarik = db.sequelize.define("Tedarik", {
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

module.exports = Tedarik;
