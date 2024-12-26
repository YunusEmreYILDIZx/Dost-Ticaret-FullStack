const asyncHandler = require("../middleware/asyncHandler");
const { createMuhasebe, findAllMuhasebes } = require("../repositories/MuhasebeRepository");

exports.create = asyncHandler(async (req, res, next) => {
    try {
        const muhasebe = await createMuhasebe(req.body);
        res.status(201).json(muhasebe);
    } catch (error) {
        next(error); // Passes error to your global error handler
    }
});

exports.findAll = asyncHandler(async (req, res, next) => {
  try {
    const muhasebe = await findAllMuhasebes();
    res.status(200).json(muhasebe);
  } catch (error) {
    next(error); // Passes error to your global error handler
  }
});

// Find a single work with an id
exports.findOne = asyncHandler(async (req, res, next) => {
  // Logic for finding an work by ID
  res.status(501).send({ message: "Find muhasebe not implemented yet." });
});

// Update an work by the id in the request
exports.update = asyncHandler(async (req, res, next) => {
  // Logic for updating an work
  res.status(501).send({ message: "Update muhasebe not implemented yet." });
});

// Delete an work with the specified id in the request
exports.deleteWork = asyncHandler(async (req, res, next) => {
  // Logic for deleting an work
  res.status(501).send({ message: "Delete muhasebe not implemented yet." });
});

// Delete all works from the database
exports.deleteAll = asyncHandler(async (req, res, next) => {
  // Logic for deleting all works
  res.status(501).send({ message: "Delete all muhasebe not implemented yet." });
});