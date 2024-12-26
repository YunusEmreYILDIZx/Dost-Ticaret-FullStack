const db = require("../config/DBConfig.js");
const DataTypes = db.Sequelize;

const Muhasebe = db.sequelize.define("Stok", {
  urunid : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urunadi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  urunkar: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Muhasebe;