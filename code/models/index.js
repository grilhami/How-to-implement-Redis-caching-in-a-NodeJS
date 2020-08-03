const Sequelize = require("sequelize")

const config = require(__dirname + "/../config/config.json")["db"]
const db = {};

const { volcano } = require("./volcano")

db['volcano'] = volcano

sequelize = new Sequelize(
config.database,
config.username,
config.password,
config
);

db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.sync()

module.exports = db