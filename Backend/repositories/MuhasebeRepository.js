const Muhasebe = require("../models/muhasebe.js");

exports.findAllMuhasebes = async () => {
  try {
    // Using Sequelize's model-based query for simplicity
    const works = await Muhasebe.findAll();
    return works;
  } catch (error) {
    console.error("Error fetching works:", error);
    throw error;
  }
};

exports.createMuhasebe = async (muhasebe) => {
  try {
    // Using Sequelize's model-based query for simplicity
    const newmuhasebe = await Muhasebe.create(muhasebe);
    return newmuhasebe;
  } catch (error) {
    console.error("Error creating work:", error);
    throw error;
  }
}