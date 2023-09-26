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
        launch_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'launches',
      }
);

module.exports = Launch;