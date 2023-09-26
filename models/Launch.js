const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Launch extends Model {}

Launch.init(
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
        launchDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Launch',
      }
);

module.exports = Launch;