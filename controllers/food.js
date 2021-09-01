// Import model
const Food = require("../models/food");

// Bollywood controller
// Post a blog
exports.postFoodData = (req, res) => {
    const blog = new Food(req.body);
    blog.save((err, blog) => {
        if (err) {
            return res.status(400).json({
                err: "unable to save blog in DB"
            })
        }
        res.status(200).json(blog);
    });
}
// Get all blogs
exports.getFoodData = (req, res) => {
    Food.find((err, blogs) => {
        if (err) {
            return res.status(400).json({
                err: "Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    })
}
