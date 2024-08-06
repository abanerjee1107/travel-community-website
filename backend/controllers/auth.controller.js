const db = require('../models');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/auth.config');

exports.signup = async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
        res.send({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send({ message: 'Invalid email or password!' });
        }

        const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: config.jwtExpiration });
        res.send({ auth: true, token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
