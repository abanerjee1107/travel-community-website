const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Blog = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
    },
    // Additional fields as needed
});

module.exports = Blog;
