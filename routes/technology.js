// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { technologyLeft, technologyRight } = require("../controllers/technology");

// Routes
// Technology route -> GET
router.get("/technology/left", technologyLeft);
router.get("/technology/right", technologyRight);

module.exports = router;
