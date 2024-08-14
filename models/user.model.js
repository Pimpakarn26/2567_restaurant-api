const { DataType, DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define("user", {
  id: { 
  type: DataTypes.INTEGER, 
  primaryKey: true, 
  autoIncrement: true 
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
