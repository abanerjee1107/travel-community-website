const express = require('express');
const { getTrips, createTrip } = require('../controllers/tripController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getTrips);
router.post('/', authMiddleware, createTrip);

module.exports = router;
