const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,

      field: 'id',
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: null,
      field: 'username',
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: null,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: null,
      field: 'password',
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
module.exports = User;
