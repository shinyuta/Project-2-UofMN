const { launch } = require("../models");

const launches = [
  {
    name: "summerSips",
    launch_date: "June 27, 2023",
  },
  {
    name: "summerVibes",
    launch_date: "July 17, 2023",
  },
  {
    name: "hallowen",
    launch_date: "September 12, 2023",
  },
];

const seedLaunches = () => launches.bulkCreate(cupdata);

module.exports = seedLaunches;
