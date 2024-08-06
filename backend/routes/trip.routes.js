const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', authMiddleware.verifyToken, tripController.createTrip);

module.exports = router;
