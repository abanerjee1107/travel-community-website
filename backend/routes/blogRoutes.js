const express = require('express');
const { getBlogs, createBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, createBlog);

module.exports = router;
