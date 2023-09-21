const Cup = require('./Cup');
const User = require('./User');

Cup.belongsTo(User,{
    foreignKey: 'user_id',
})

User.hasMany(Cup, {
    foreignKey: 'user_id'
})

module.exports = {Cup, User};