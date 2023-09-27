// with help from prof trey eckels

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCup extends Model{}

UserCup.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
              },        
        },
        cup_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'cup',
                key: 'id',
              },        
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'usercup',
      }
    
)

module.exports = UserCup;