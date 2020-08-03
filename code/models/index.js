const Sequelize = require("sequelize")
const path = require("path")
const config = require(__dirname + "/../config/config.json")["db"]
const db = {};

sequelize = new Sequelize(
config.database,
config.username,
config.password,
config
);

db['volcano'] = require(path.join(__dirname, "volcano.js"))(sequelize, Sequelize)

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.sync()
module.exports = db