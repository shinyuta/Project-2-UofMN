const { cups } = require("../models");

const cupdata = [
  {
    name: "brown-pumpkin",
    type: "tumbler",
    size: 16,
    filename: "Brown-Pumpkin-Tumbler.jpg",
    launch: 3,
  },
  {
    name: "green-drip",
    type: "cold-cup",
    size: 24,
    filename: "Green-Drip-Cold-Cup.jpg",
    launch: 3,
  },
  {
    name: "green_pumpkin",
    type: "tumbler",
    size: 12,
    filename: "Green-Pumpkin-Tumbler.jpg",
    launch: 3,
  },
  {
    name: "multi-color",
    type: "cold-cup",
    size: 24,
    filename: 'Multi-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "multi-color-drip",
    type: "cold-cup",
    size: 16,
    filename: 'Multi-Drip-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "multi-color-drip",
    type: "cold-cup",
    size: 16,
    filename: 'Multi-Drip-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "multi-color-drip",
    type: "cold-cup",
    size: 16,
    filename: 'Multi-Drip-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "multi-color-drip",
    type: "cold-cup",
    size: 16,
    filename: 'Multi-Drip-Cold-Cup.jpg',
    launch: 3
  },
];

const seedCups = () => cups.bulkCreate(cupdata);

module.exports = seedCups;
