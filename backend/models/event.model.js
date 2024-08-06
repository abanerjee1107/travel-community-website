const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING
    },
    // Additional fields as needed
});

module.exports = Event;
