const { User } = require("../models");

// dummy user data grabbed from class work
const userData = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: 'password1234',
    cupsOwned:  5,  
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: 'password1234',
    cupsOwned:  5, 
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: 'password1234',
    cupsOwned:  5, 
  },
];



const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;