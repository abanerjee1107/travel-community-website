const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Trip = sequelize.define('Trip', {
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    // Additional fields as needed
});

module.exports = Trip;
