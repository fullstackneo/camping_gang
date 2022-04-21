const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Campsite extends Model {}

Campsite.init(
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
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      field: 'name',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      field: 'description',
    },
    activities: {
      type: binary(20),
      allowNull: true,
      defaultValue: null,
      field: 'activities',
    },
    amentities: {
      type: binary(20),
      allowNull: true,
      defaultValue: null,
      field: 'amentities',
    },
    fee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'fee_id',
      references: {
        key: 'id',
        model: 'site_fee_model',
      },
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'type_id',
      references: {
        key: 'id',
        model: 'site_type_model',
      },
    },
    fire_ring: {
      type: binary(1),
      allowNull: true,
      defaultValue: null,
      field: 'fire_ring',
    },
    initial_rate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0',
      field: 'initial_rate',
    },
    contributor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'contributor_id',
      references: {
        key: 'id',
        model: 'user_model',
      },
    },
    address: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: null,
      field: 'address',
    },
    longitude: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      field: 'longitude',
    },
    latitute: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      field: 'latitute',
    },
    site_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'site_count',
    },
    stay_length: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'stay_length',
    },
    signal_strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: 'signal_strength',
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      field: 'contact',
    },
    website: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      field: 'website',
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'campsite',
  }
);
module.exports = Campsite;
