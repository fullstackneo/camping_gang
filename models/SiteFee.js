const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SiteFee extends Model {}

SiteFee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: null,
      field: 'name',
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'site_fee',
  }
);
module.exports = SiteFee;
