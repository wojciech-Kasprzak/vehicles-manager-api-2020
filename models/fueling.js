"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fueling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fueling.belongsTo(models.Car, {
        foreignKey: "CarId",
        onDelete: "CASCADE",
      });
    }
  }
  Fueling.init(
    {
      // id: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4
      // },
      price: DataTypes.FLOAT,
      amountFuel: DataTypes.FLOAT,
      kilometers: DataTypes.FLOAT,
      totalPrice: DataTypes.FLOAT,
      averageFuelConsumption: DataTypes.FLOAT,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Fueling",
    }
  );
  return Fueling;
};
