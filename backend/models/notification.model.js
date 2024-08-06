const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Notification = sequelize.define('Notification', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    // Additional fields as needed
});

module.exports = Notification;
