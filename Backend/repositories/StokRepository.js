const Stok = require("../models/stok.js");


exports.createStok = async (Stok) => {
  try {
    // Using Sequelize's model-based query for simplicity
    const newStok = await Stok.create(Stok);
    return newStok;
  } catch (error) {
    console.error("Error creating vehicle:", error);
    throw error;
  }
}

exports.findAllStok = async () => {
  try {
    // Using Sequelize's model-based query for simplicity
    const companies = await Stok.findAll();
    return companies;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};
