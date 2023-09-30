const Sequelize = require('sequelize');
const express = require("express");
require('dotenv').config();

let sequelize;
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '0.0.0.0',
      dialect: 'mysql',
      port: PORT
    }
  );
}

module.exports = sequelize;
