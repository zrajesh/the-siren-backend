// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { fitnessLeft, fitnessRight } = require("../controllers/fitness");

// Routes
// Fitness route -> GET
router.get("/fitness/left", fitnessLeft);
router.get("/fitness/right", fitnessRight);

module.exports = router;
