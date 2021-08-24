// Import data
const { heroData } = require("../blogData/hero");

// Home controller
exports.hero = (req, res) => {
    res.json(heroData);
}

