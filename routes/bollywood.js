// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { getBollywoodData, postBollywoodData } = require("../controllers/bollywood");

// Routes
// Bollywood 
// Route -> POST
router.post("/bollywood", postBollywoodData);
// Route -> GET
router.get("/bollywood", getBollywoodData);

module.exports = router;
