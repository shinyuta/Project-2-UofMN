const { Launch } = require("../models");

const launchData = [
  {
    name: "summerSips",
    launchDate: "June 27, 2023",
  },
  {
    name: "summerVibes",
    launchDate: "July 17, 2023",
  },
  {
    name: "hallowen",
    launchDate: "September 12, 2023",
  },
];

const seedLaunches = () => Launch.bulkCreate(launchData);

module.exports = seedLaunches;
