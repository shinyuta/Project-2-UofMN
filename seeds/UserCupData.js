const { UserCup } = require("../models");

const UserCupData = [

{
    user_id: 1,
    cup_id: 5
},
{
    user_id:2,
    cup_id:7
}
]

const seedUserCup = () => UserCup.bulkCreate(UserCupData);

module.exports = seedUserCup;