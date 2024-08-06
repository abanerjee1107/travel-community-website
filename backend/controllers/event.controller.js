const db = require('../models');
const Event = db.event;

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.send(event);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
