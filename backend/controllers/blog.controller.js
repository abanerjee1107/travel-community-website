const db = require('../models');
const Blog = db.blog;

exports.createBlogPost = async (req, res) => {
    try {
        const blogPost = await Blog.create(req.body);
        res.send(blogPost);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
