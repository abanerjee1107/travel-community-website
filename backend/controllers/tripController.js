const Trip = require('../models/Trip');

exports.getTrips = async (req, res) => {
    const trips = await Trip.findAll({ where: { user_id: req.user.id } });
    res.json(trips);
};

exports.createTrip = async (req, res) => {
    const { destination, budget } = req.body;
    const trip = await Trip.create({
        user_id: req.user.id,
        destination,
        budget,
    });
    res.status(201).json(trip);
};
