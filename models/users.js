const { DataTypes } = require("sequelize");
const { sequelize } = requiere("sequelize");

const Users = sequelize.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  passsword: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    defaultValue: "active",
    allowNull: false,
  }, 
  role : {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'guest'
  }
});

module.exports = {Users}
