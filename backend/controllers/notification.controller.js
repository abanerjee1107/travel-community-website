const db = require('../models');
const Notification = db.notification;

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll({ where: { userId: req.userId } });
        res.send(notifications);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
