// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { foodLeft, foodRight } = require("../controllers/food");

// Routes
// Food route -> GET
router.get("/food/left", foodLeft);
router.get("/food/right", foodRight);

module.exports = router;
