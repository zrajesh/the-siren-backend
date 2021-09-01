// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { getTechnologyData, postTechnologyData } = require("../controllers/technology");

// Routes
// Bollywood 
// Route -> POST
router.post("/technology", postTechnologyData);
// Route -> GET
router.get("/technology", getTechnologyData);

module.exports = router;
