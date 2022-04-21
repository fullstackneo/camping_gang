const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    campsite_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      field: 'campsite_id',
      references: {
        key: 'id',
        model: 'campsite_model',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      field: 'user_id',
      references: {
        key: 'id',
        model: 'user_model',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'like',
  }
);
module.exports = Like;
