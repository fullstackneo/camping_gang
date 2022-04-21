const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SiteType extends Model {}

SiteType.init(
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
    modelName: 'site_type',
  }
);
module.exports = SiteType;