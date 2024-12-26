const asyncHandler = require("../middleware/asyncHandler");
const { createTedarik, findAllTedariks } = require("../repositories/TedarikRepository");

exports.create = asyncHandler(async (req, res, next) => {
    try {
        const tedarik = await createTedarik(req.body);
        res.status(201).json(tedarik);
    } catch (error) {
        next(error); // Passes error to your global error handler
    }
});

exports.findAll = asyncHandler(async (req, res, next) => {
  try {
    const tedariks = await findAllTedariks();
    res.status(200).json(tedariks);
  } catch (error) {
    next(error); // Passes error to your global error handler
  }
});

// Find a single vehicle with an id
exports.findOne = asyncHandler(async (req, res, next) => {
  // Logic for finding an vehicle by ID
  res.status(501).send({ message: "Find tedarik not implemented yet." });
});

// Update an vehicle by the id in the request
exports.update = asyncHandler(async (req, res, next) => {
  // Logic for updating an vehicle
  res.status(501).send({ message: "Update vehicle not implemented yet." });
});

// Delete an vehicle with the specified id in the request
exports.deleteVehicle = asyncHandler(async (req, res, next) => {
  // Logic for deleting an vehicle
  res.status(501).send({ message: "Delete vehicle not implemented yet." });
});

// Delete all vehicles from the database
exports.deleteAll = asyncHandler(async (req, res, next) => {
  // Logic for deleting all vehicles
  res.status(501).send({ message: "Delete all vehicles not implemented yet." });
});