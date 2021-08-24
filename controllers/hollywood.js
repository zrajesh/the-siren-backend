// Import data
const { hollywoodLeft, hollywoodRight } = require("../blogData/hollywood");

// Hollywood controller
exports.hollywoodLeft = (req, res) => {
    res.json(hollywoodLeft);
}

exports.hollywoodRight = (req, res) => {
    res.json(hollywoodRight);
}
