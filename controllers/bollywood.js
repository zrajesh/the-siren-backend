// Import data
const { bollywoodLeftData, bollywoodRightdata } = require("../blogData/bollywood");

// Bollywood controller
exports.bollywoodLeft = (req, res) => {
    res.json(bollywoodLeftData);
}

exports.bollywoodRight = (req, res) => {
    res.json(bollywoodRightdata);
}
