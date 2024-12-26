const db = require("../config/DBConfig.js");
const DataTypes = db.Sequelize;

const Randevu = db.sequelize.define("Randevu", {
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

module.exports = Randevu;
