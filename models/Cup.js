const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cup extends Model {}

Cup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    launch: {
      type: DataTypes.STRING,
      references: {
        model: 'launches',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
