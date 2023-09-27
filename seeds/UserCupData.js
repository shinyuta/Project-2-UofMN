const { UserCup } = require("../models");

const UserCupData = [

{
    user_id: 1,
    cup_id: 5
},
{
    user_id:1,
    cup_id: 4
},
{
    user_id:1,
    cup_id: 6
}
]

const seedUserCup = () => UserCup.bulkCreate(UserCupData);

module.exports = seedUserCup;