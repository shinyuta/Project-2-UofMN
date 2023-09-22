const { User } = require("../models");

// dummy user data grabbed from class work
const userData = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: 'password1234'
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: 'password1234'
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: 'password1234'
  },
];



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;