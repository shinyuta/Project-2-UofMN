const sequelize = require("sequelize");
const Cup = require("./Cup");
const User = require("./User");
const Launch = require("./Launch");


// Cup.belongsTo(User,{
//   foreignKey: 'owned_by_user',
// });

// User.hasMany(Cup, {
//   foreignKey: 'cupsOwned'
// });

Launch.hasMany(Cup, {
  foreignKey: 'launch_id'
});

Cup.hasOne(Launch,{
  foreignKey: 'cup_id'
})



User.belongsToMany(Cup, { through: 'UserCup' });
Cup.belongsToMany(User, { through: 'UserCup' });
Cup.hasMany(User, { through: 'UserCup'});
User.hasMany(Cup, { through: 'UserCup'});


// Cup.belongsToMany(User, {
//   through: 'owner',
//   foreignKey: 'Cup',
//   as: 'owned_by',
// });


module.exports = { Cup, User, Launch };
