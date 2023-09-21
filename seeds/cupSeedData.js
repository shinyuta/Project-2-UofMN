const { cups } = require('../models');

const cupdata = [
    {
        name: "green-drip",
        type: "cold-cup",
        size: 24,
        filename: 'Green-Drip-Cold-Cup.jpg'
      },
    ]

    const seedCups = () => cups.bulkCreate(cupdata);

    module.exports = seedCups;