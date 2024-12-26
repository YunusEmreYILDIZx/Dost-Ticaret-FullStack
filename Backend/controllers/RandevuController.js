const asyncHandler = require("../middleware/asyncHandler");
const { createRandevu, findAllRandevu } = require("../repositories/RandevuRepository");

// Create and Save a new Operator
exports.create = asyncHandler(async (req, res, next) => {
    try {
        const randevu = await createRandevu(req.body);
        res.status(201).json(randevu);
    } catch (error) {
        next(error); // Passes error to your global error handler
    }
});

// Retrieve all Operators from the database
exports.findAll = asyncHandler(async (req, res, next) => {
  try {
    const randevus = await findAllRandevu();
    res.status(200).json(randevus);
  } catch (error) {
    next(error); // Passes error to your global error handler
  }
});

// Find a single Operator with an id
exports.findOne = asyncHandler(async (req, res, next) => {
  // Logic for finding an Operator by ID
  res.status(501).send({ message: "Find operator not implemented yet." });
});

// Update an Operator by the id in the request
exports.update = asyncHandler(async (req, res, next) => {
  // Logic for updating an Operator
  res.status(501).send({ message: "Update operator not implemented yet." });
});

// Delete an Operator with the specified id in the request
exports.deleteOperator = asyncHandler(async (req, res, next) => {
  // Logic for deleting an Operator
  res.status(501).send({ message: "Delete operator not implemented yet." });
});

// Delete all Operators from the database
exports.deleteAll = asyncHandler(async (req, res, next) => {
  // Logic for deleting all Operators
  res.status(501).send({ message: "Delete all operators not implemented yet." });
});