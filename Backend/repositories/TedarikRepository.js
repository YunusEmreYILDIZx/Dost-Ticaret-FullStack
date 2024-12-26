const Tedarik = require("../models/tedarik.js");

exports.findAllTedariks = async () => {
  try {
    // Using Sequelize's model-based query for simplicity
    const vehicles = await Tedarik.findAll();
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

exports.createTedarik = async (Tedarik) => {
  try {
    // Using Sequelize's model-based query for simplicity
    const newVehicle = await Tedarik.create(Tedarik);
    return newVehicle;
  } catch (error) {
    console.error("Error creating vehicle:", error);
    throw error;
  }
}