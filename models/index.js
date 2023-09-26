const Cup = require('./Cup');
const User = require('./User');
const Launch = require('./launches');
const UserCup = require('./UserCup');

// Cup.belongsTo(User,{
//     foreignKey: 'user_id',
// })

// User.hasMany(Cup, {
//     foreignKey: 'user_id'
// })

Launch.hasMany(Cup, {
  foreignKey: 'launch_id'
});

Cup.hasOne(Launch,{
  foreignKey: 'launch_id'
})

User.belongsToMany(Cup, { through: {model:UserCup} });
Cup.belongsToMany(User, { through: {model:UserCup} });
// Cup.hasMany(User, { through: 'UserCup'});
// User.hasMany(Cup, { through: 'UserCup'});

module.exports = {Cup, User, Launch, UserCup};