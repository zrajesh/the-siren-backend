// Import data
const { foodLeft, foodRight } = require("../blogData/food");

// Food controller
exports.foodLeft = (req, res) => {
    res.json(foodLeft);
}

exports.foodRight = (req, res) => {
    res.json(foodRight);
}
