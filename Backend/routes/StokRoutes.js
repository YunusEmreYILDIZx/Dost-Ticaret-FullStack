const express = require("express");
const StokController = require("../controllers/StokController.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const router = express.Router();

// Define routes for the Operator resource
router.get("/stok", asyncHandler(StokController.findAll)); // Fetch all operators
router.post("/stok", asyncHandler(StokController.create)); // Create a new operator
//router.get("/:id", asyncHandler(CompanyController.findOne)); // Get a specific operator
router.put("/:id", asyncHandler(StokController.update)); // Update a specific operator
//router.delete("/:id", asyncHandler(CompanyController.delete)); // Delete a specific operator
//router.delete("/", asyncHandler(CompanyController.deleteAll)); // Delete all operators

// Define routes for the Operator resource
// router.get("/", asyncHandler(TedarikController.findAll)); // Fetch all operators
// router.post("/", asyncHandler(TedarikController.create)); // Create a new operator
// router.get("/:id", asyncHandler(TedarikController.findOne)); // Get a specific operator
// router.put("/:id", asyncHandler(TedarikController.update)); // Update a specific operator
// router.delete("/:id", asyncHandler(TedarikController.delete)); // Delete a specific operator
// router.delete("/", asyncHandler(TedarikController.deleteAll)); // Delete all operators


module.exports = router;