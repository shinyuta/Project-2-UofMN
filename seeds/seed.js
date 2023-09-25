// pulled from class work, needs to be updated for our project
;

// i think we just need whats below, above is more then what we need

const sequelize = require('../config/connection');
const seedCups = require('./cupSeedData');

const seedLaunch = require('./launchSeedData');

const seedUser = require('./userSeedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedLaunch();  
  
  await seedUser();
  
  await seedCups(); 

  process.exit(0);
};

seedAll();

