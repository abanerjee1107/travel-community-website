const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Trip = sequelize.define('Trip', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    budget: {
        type: DataTypes.DECIMAL(10, 2),
    },
});

module.exports = Trip;
