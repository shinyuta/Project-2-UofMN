const { Cup } = require("../models");

const cupdata = [
  {
    name: "brown pumpkin",
    type: "tumbler",
    size: 16,
    filename: "Brown-Pumpkin-Tumbler.jpg",
    launch: 3,
  },
  {
    name: "green drip",
    type: "cold cup",
    size: 24,
    filename: "Green-Drip-Cold-Cup.jpg",
    launch: 3,
  },
  {
    name: "green pumpkin",
    type: "tumbler",
    size: 12,
    filename: "Green-Pumpkin-Tumbler.jpg",
    launch: 3,
  },
  {
    name: "multi color",
    type: "cold cup",
    size: 24,
    filename: 'Multi-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "multi color drip",
    type: "cold cup",
    size: 16,
    filename: 'Multi-Drip-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "pink pumpkin mug",
    type: "mug",
    size: 12,
    filename: 'Pink-Pumpkin-Mug.jpg',
    launch: 3
  },
  {
    name: "pumpkin fog",
    type: "cold cup",
    size: 24,
    filename: 'Pumpkin-Fog-Cold-Cup.jpg',
    launch: 3
  },
  {
    name: "skull mug",
    type: "mug",
    size: 14,
    filename: 'Skull-Mug.jpg',
    launch: 3
  },
  {
    name: "Yiqiao Wang cold cup",
    type: "coldcup",
    size: 24,
    filename: 'Yiqiao-Wang-cold-cup.jpg',
    launch: 1
  },
  {
    name: "Yiqiao Wang mug",
    type: "mug",
    size: 12,
    filename: 'Yiqiao-Wang-mug.jpg',
    launch: 1
  },
  {
    name: "Yiqiao Wang tumbler",
    type: "mug",
    size: 16,
    filename: 'Yiqiao-Wang-tumbler.jpg',
    launch: 1
  },
  {
    name: "floral leaves",
    type: "cold cup",
    size: 24,
    filename: 'Floral-Leaves-Cold-Cup.jpg',
    launch: 1
  },
  {
    name: "Gradient Sunset",
    type: "cold cup",
    size: 24,
    filename: 'Gradient-Sunset-Cold-Cup.jpg',
    launch: 1
  },
  {
    name: "immersive florals",
    type: "cold cup",
    size: 24,
    filename: 'Immersive-Florals-Cold-Cup.jpg',
    launch: 1
  },
  {
    name: "Iridescent Magenta Bling",
    type: "cold cup",
    size: 24,
    filename: 'Iridescent-Magenta-Bling-Cold-Cup.jpg',
    launch: 1
  },
  {
    name: "Teal Splash Bling",
    type: "cold cup",
    size: 24,
    filename: 'Teal-Splash-Bling-Cold-Cup-and-Keychain.jpg',
    launch: 1
  },
  {
    name: "Tri-Colored Fluorescent Yellow",
    type: "cold cup",
    size: 24,
    filename: 'Tri-Colored-Fluorescent-Yellow-and-Tangerine-Cold-Cups.jpg',
    launch: 1
  },
  {
    name: "Tri-Colored Fluorescent Tangerine",
    type: "cold cup",
    size: 24,
    filename: 'Tri-Colored-Fluorescent-Tangerine-Cold-Cup.jpg',
    launch: 1
  },
  {
    name: "Back to School",
    type: "cold cup",
    size: 24,
    filename: 'Back-to-School-Cold-Cup.jpg',
    launch: 2
  },
  {
    name: "Cobalt Grid",
    type: "cold cup",
    size: 24,
    filename: 'Back-to-School-Cold-Cup.jpg',
    launch: 2
  },
  {
    name: "Fluorescent Rainbow",
    type: "cold cup",
    size: 24,
    filename: 'Fluorescent-Rainbow-Cold-Cup.jpg',
    launch: 2
  },
  {
    name: "Fuchsia Glow Water Bottle",
    type: "water bottle",
    size: 24,
    filename: 'Fuchsia-Glow-Water-Bottle.jpg',
    launch: 2
  },
  {
    name: "Iridescent Print",
    type: "cold cup",
    size: 24,
    filename: 'Iridescent-Print-Cold-Cup.jpg',
    launch: 2
  },
  {
    name: "Lime Kaleidoscope",
    type: "cold cup",
    size: 24,
    filename: 'Lime-Kaleidoscope-Cold-Cup.jpg',
    launch: 2
  },
  {
    name: "Teal Stainless Steel",
    type: "tumbler",
    size: 16,
    filename: 'Teal-Stainless-Steel-Tumbler.jpg',
    launch: 2
  },
];

const seedCups = () => Cup.bulkCreate(cupdata);

module.exports = seedCups;