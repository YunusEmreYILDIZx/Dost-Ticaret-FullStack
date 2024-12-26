const Randevu = require("../models/randevu.js");

exports.findAllRandevus = async () => {
  try {
    // Using Sequelize's model-based query for simplicity
    const randevus = await Randevu.findAll();
    return randevus;
  } catch (error) {
    console.error("Error fetching operators:", error);
    throw error;
  }
};

exports.createRandevu = async (randevu) => {
  try {
    // Using Sequelize's model-based query for simplicity
    const newRandevu = await Randevu.create(randevu);
    return newRandevu;
  } catch (error) {
    console.error("Error creating operator:", error);
    throw error;
  }
}