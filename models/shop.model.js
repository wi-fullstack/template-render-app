const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shop extends Model {}

Shop.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    customer_service_email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    logo_url: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shop',
  }
);

module.exports = Shop;
