const sequelize = require('sequelize');
const Cup = require('./Cup');
const User = require('./User');
const Launch = require('./launches');

Cup.belongsTo(User,{
    foreignKey: 'user_id',
})

User.hasMany(Cup, {
    foreignKey: 'user_id'
})

Launch.hasMany(Cup, {
    foreignKey: 'launch_id'}
    )

module.exports = {Cup, User};


// below with help from
// https://www.google.com/search?sca_esv=567457903&rlz=1C1ONGR_enUS957US957&sxsrf=AM9HkKm2SxEX9pcTD1WNqSRrkkYiV7MYmg:1695345887899&q=How+to+use+belongs+to+many+in+sequelize+model+javascript&sa=X&sqi=2&ved=2ahUKEwjOnq3Lh72BAxV9jokEHeFFAyQQ1QJ6BAgvEAE&biw=2048&bih=953&dpr=0.94#fpstate=ive&vld=cid:03c6342e,vid:hw6NCvu45JA,st:0
// and https://stackoverflow.com/questions/29680359/how-to-use-sequelize-belongstomany-associations
// should make a through table called owner 


Cup.belongsToMany( User,{ through: 'owner'});

User.belongsToMany( Cup,{ through: 'owner'});

await sequelize.sync({ force: true })