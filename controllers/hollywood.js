// Import model
const Hollywood = require("../models/hollywood");

// Bollywood controller
// Post a blog
exports.postHollywoodData = (req, res) => {
    const blog = new Hollywood(req.body);
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
exports.getHollywoodData = (req, res) => {
    Hollywood.find((err, blogs) => {
        if (err) {
            return res.status(400).json({
                err: "Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    })
}
