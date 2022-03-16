const { DataTypes } = requiere('sequelize');
const { sequelize } = requiere("sequelize");

const Actors = sequelize.define('actors', {
    id: {
        primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    country : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    oscardsPrizes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    profilePic: {
    
    },
    status: {
        type: DataTypes.STRING(10),
        defaultValue: 'active',
        allowNull: false
    }
})

module.exports = {Actors}