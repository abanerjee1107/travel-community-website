const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { uploadProfilePicture } = require('../controllers/userController');
const router = express.Router();

router.post('/profile/picture', authMiddleware, uploadProfilePicture);

module.exports = router;
