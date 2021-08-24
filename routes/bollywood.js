// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { bollywoodLeft, bollywoodRight } = require("../controllers/bollywood");

// Routes
// Bollywood route -> GET
router.get("/bollywood/left", bollywoodLeft);
router.get("/bollywood/right", bollywoodRight);

module.exports = router;
