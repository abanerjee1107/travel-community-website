const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', authMiddleware.verifyToken, eventController.createEvent);

module.exports = router;
