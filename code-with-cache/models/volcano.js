module.exports = (sequelize, DataTypes) => {
    const volcano = sequelize.define(
      "volcano",
      {
        name: DataTypes.STRING,
        shape: DataTypes.STRING,
        elevation: DataTypes.INTEGER,
        lastEruption: DataTypes.STRING,
      },
      {}
    );
    return volcano;
};