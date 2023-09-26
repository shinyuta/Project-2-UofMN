const Cup = require('./Cup');
const User = require('./User');
const Launch = require('./Launch');
const UserCup = require('./UserCup');


Launch.hasMany(Cup, {
  foreignKey: 'launch_id'
});

Cup.hasOne(Launch,{
  foreignKey: 'launch_id'
})

User.belongsToMany(Cup, { through: {model:UserCup} });


Cup.belongsToMany(User, { through: {model:UserCup} });

module.exports = {Cup, User, Launch, UserCup};
