// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { getFoodData, postFoodData } = require("../controllers/food");

// Routes
// Bollywood 
// Route -> POST
router.post("/food", postFoodData);
// Route -> GET
router.get("/food", getFoodData);

module.exports = router;
