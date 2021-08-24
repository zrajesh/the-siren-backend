// Import data
const { fitnessLeft, fitnessRight } = require("../blogData/fitness");

// Fitness controller
exports.fitnessLeft = (req, res) => {
    res.json(fitnessLeft);
}

exports.fitnessRight = (req, res) => {
    res.json(fitnessRight);
}
