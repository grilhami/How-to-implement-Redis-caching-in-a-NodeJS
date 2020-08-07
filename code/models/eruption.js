module.exports = (sequelize, DataTypes) => {
    const eruption = sequelize.define(
      "eruption",
      {
        volcanoNumber: DataTypes.BIGINT,
        volcanoName: DataTypes.TEXT,
        eruptionNumber: DataTypes.BIGINT,
        eruptionCategory: DataTypes.TEXT,
        areaOfActivity: DataTypes.TEXT,
        vei: DataTypes.FLOAT,
        startYear: DataTypes.FLOAT,
        startMonth: DataTypes.FLOAT,
        startDay: DataTypes.FLOAT,
        evidenceMethodDating: DataTypes.TEXT,
        endYear: DataTypes.FLOAT,
        endMonth: DataTypes.FLOAT,
        endDay: DataTypes.FLOAT,
        latitude: DataTypes.FLOAT,
        longitude: DataTypes.FLOAT,
      },
      {}
    );
    return eruption;
};