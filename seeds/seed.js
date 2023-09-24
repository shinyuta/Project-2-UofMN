// pulled from class work, needs to be updated for our project

// const sequelize = require('../config/connection');
// const { cup, launches, user } = require('../models');

// const userSeedData = require('./userSeedData.js');
// const cupSeedData = require('./cupSeedData.js');
// const launchData = require('./launchData.js')

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await user.bulkCreate(userSeedData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const { id } of readers) {
//     const newCard = await LibraryCard.create({
//       reader_id: id,
//     });
//   }

//   for (const book of bookSeedData) {
//     const newBook = await Book.create({
//       ...book,
//       // Attach a random reader ID to each book
//       reader_id: readers[Math.floor(Math.random() * readers.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();

// i think we just need whats below, above is more then what we need

const sequelize = require('../config/connection');
const seedCups = require('./cupSeedData');

const seedLaunch = require('./launchSeedData');

const seedUser = require('./userSeedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
    
  await seedUser();

  await seedLaunch();

  await seedCups();

  

  process.exit(0);
};

seedAll();

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await user.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();