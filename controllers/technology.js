// Import data
const { technologyLeft, technologyRight } = require("../blogData/technology");

// Technology controller
exports.technologyLeft = (req, res) => {
    res.json(technologyLeft);
}

exports.technologyRight = (req, res) => {
    res.json(technologyRight);
}
