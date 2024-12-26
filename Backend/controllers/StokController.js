const asyncHandler = require("../middleware/asyncHandler");
const Stok = require("../models/stok");
const { findAllStok, createStok } = require("../repositories/StokRepository");


exports.create = asyncHandler(async (req, res, next) => {
  try {
      const Stok = await createStok(req.body);
      res.status(201).json(Stok);
  } catch (error) {
      next(error); // Passes error to your global error handler
  }
});

exports.findAll = asyncHandler(async (req, res, next) => {
  try {
    const Stok = await findAllStok();
    res.status(200).json(Stok);
  } catch (error) {
    next(error); // Passes error to your global error handler
  }
});

exports.findOne = asyncHandler(async (req, res, next) => {
  // Logic for finding an vehicle by ID
  res.status(501).send({ message: "Find stok not implemented yet." });
});

exports.update = asyncHandler(async (req, res, next) => {
  // Logic for updating an vehicle
  res.status(501).send({ message: "Update stok not implemented yet." });
});

exports.deleteStok = asyncHandler(async (req, res, next) => {
  // Logic for deleting an vehicle
  res.status(501).send({ message: "Delete stok not implemented yet." });
});

exports.deleteAll = asyncHandler(async (req, res, next) => {
  // Logic for deleting all vehicles
  res.status(501).send({ message: "Delete all stok not implemented yet." });
});

// Update an company by the id in the request
exports.update = asyncHandler(async (req, res, next) => {
  // Logic for updating an company
  res.status(501).send({ message: "Update company not implemented yet." });
});