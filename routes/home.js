// Imports
const express = require("express");
const router = express.Router();
// Controller imports
const { hero } = require("../controllers/home");

// Routes
// Hero route -> GET
router.get("/", hero)


// Exports
module.exports = router;
