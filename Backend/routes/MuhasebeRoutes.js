const express = require("express");
const MuhasebeController = require("../controllers/MuhasebeController.js");
const asyncHandler = require("../middleware/asyncHandler.js");

const router = express.Router();

// Define routes for the Operator resource
router.get("/", asyncHandler(MuhasebeController.findAll)); // Fetch all operators
router.post("/", asyncHandler(Muhasebeontroller.create)); // Create a new operator
router.get("/:id", asyncHandler(MuhasebeController.findOne)); // Get a specific operator
router.put("/:id", asyncHandler(MuhasebeController.update)); // Update a specific operator
router.delete("/:id", asyncHandler(MuhasebeController.delete)); // Delete a specific operator
router.delete("/", asyncHandler(MuhasebeController.deleteAll)); // Delete all operators

module.exports = router;
