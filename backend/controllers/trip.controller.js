const db = require('../models');
const Trip = db.trip;

exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.send(trip);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
