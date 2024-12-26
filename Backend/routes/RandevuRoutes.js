const express = require("express");
const RandevuController = require("../controllers/RandevuController.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const router = express.Router();

// Define routes for the Operator resource
router.get("/", asyncHandler(RandevuController.findAll)); // Fetch all operators
router.post("/", asyncHandler(RandevuController.create)); // Create a new operator
router.get("/:id", asyncHandler(RandevuController.findOne)); // Get a specific operator
router.put("/:id", asyncHandler(RandevuController.update)); // Update a specific operator
router.delete("/:id", asyncHandler(RandevuController.delete)); // Delete a specific operator
router.delete("/", asyncHandler(RandevuController.deleteAll)); // Delete all operators

module.exports = router;