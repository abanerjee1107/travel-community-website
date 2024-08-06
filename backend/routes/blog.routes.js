const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', authMiddleware.verifyToken, blogController.createBlogPost);

module.exports = router;
