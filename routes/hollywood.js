// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { getHollywoodData, postHollywoodData } = require("../controllers/hollywood");

// Routes
// Bollywood 
// Route -> POST
router.post("/hollywood", postHollywoodData);
// Route -> GET
router.get("/hollywood", getHollywoodData);

module.exports = router;
