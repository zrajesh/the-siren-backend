// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { hollywoodLeft, hollywoodRight } = require("../controllers/hollywood");

// Routes
// Hollywood route -> GET
router.get("/hollywood/left", hollywoodLeft);
router.get("/hollywood/right", hollywoodRight);

module.exports = router;
