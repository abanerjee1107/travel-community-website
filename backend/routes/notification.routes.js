const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/list', authMiddleware.verifyToken, notificationController.getNotifications);

module.exports = router;
