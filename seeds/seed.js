

// i think we just need whats below, above is more then what we need

const sequelize = require('../config/connection');
const seedCups = require('./cupSeedData');
const seedLaunch = require('./launchData');
const seedUser = require('./userSeedData');
const seedUserCup = require('./UserCupData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLaunch();

  await seedCups();

  await seedUser();

  await seedUserCup();

  

  process.exit(0);
};

seedAll();