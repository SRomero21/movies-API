const { DataTypes } = require("sequelize");
const { sequelize } = requiere("sequelize");

const Reviews = sequelize.define('reviews', {
    id: {
        primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rating: {
    },
    status: {
        type: DataTypes.STRING(10),
        defaultValue: 'active',
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    movieID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = { Reviews }