// Import model
const Technology = require("../models/technology");

// Bollywood controller
// Post a blog
exports.postTechnologyData = (req, res) => {
    const blog = new Technology(req.body);
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
exports.getTechnologyData = (req, res) => {
    Technology.find((err, blogs) => {
        if (err) {
            return res.status(400).json({
                err: "Failed to get all blogs"
            });
        }
        res.status(200).json(blogs)
    })
}
