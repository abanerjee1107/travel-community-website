const db = require('../models');
const User = db.user;

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId);
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
