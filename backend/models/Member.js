const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Member = sequelize.define('Member', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING,
    },
    budget: {
        type: DataTypes.DECIMAL(10, 2),
    },
    currency: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
});

module.exports = Member;
