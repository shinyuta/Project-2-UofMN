const Cup = require('./Cup');
const User = require('./User');
const Launch = require('./Launch')

Cup.belongsTo(User,{
    foreignKey: 'user_id',
});

User.hasMany(Cup, {
    foreignKey: 'user_id'
});

Launch.hasMany(Cup, {
    foreignKey: 'launch_id'
});

Cup.hasOne(Launch,{
    foreignKey: 'launch_id'
})
module.exports = {Cup, User, Launch};