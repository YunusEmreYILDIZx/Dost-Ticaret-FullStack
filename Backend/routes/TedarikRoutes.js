const express = require("express");
const TedarikController = require("../controllers/TedarikController.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const router = express.Router();

// Define routes for the Operator resource
router.get("/", asyncHandler(TedarikController.findAll)); // Fetch all operators
router.post("/", asyncHandler(TedarikController.create)); // Create a new operator
router.get("/:id", asyncHandler(TedarikController.findOne)); // Get a specific operator
router.put("/:id", asyncHandler(TedarikController.update)); // Update a specific operator
router.delete("/:id", asyncHandler(TedarikController.delete)); // Delete a specific operator
router.delete("/", asyncHandler(TedarikController.deleteAll)); // Delete all operators

module.exports = router;
