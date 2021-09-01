// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { getFitnessData, postFitnessData } = require("../controllers/fitness");

// Routes
// Bollywood 
// Route -> POST
router.post("/fitness", postFitnessData);
// Route -> GET
router.get("/fitness", getFitnessData);

module.exports = router;
