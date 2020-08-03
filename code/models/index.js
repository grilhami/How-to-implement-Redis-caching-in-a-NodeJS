"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require(__dirname + "/../config/config.json")["db"];
const db = {};


sequelize = new Sequelize(
config.database,
config.username,
config.password,
config
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();

module.exports = db;