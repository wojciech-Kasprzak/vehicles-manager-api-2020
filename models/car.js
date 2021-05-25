"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Fueling, {
        foreignKey: "CarId",
        onDelete: "CASCADE",
      });
      Car.hasMany(models.Servicing, {
        foreignKey: "CarId",
        onDelete: "CASCADE",
      });
      Car.belongsToMany(models.User, {
        through: "CarUsers",
        as: "Users",
        foreignKey: "CarId",
        otherKey: "UserId",
        onDelete: "CASCADE",
      });
    }
  }
  Car.init(
    {
      // id: {
      //   allowNull: false,
      //   primaryKey: true,
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4
      // },
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      milage: DataTypes.FLOAT,
      startMileage: DataTypes.FLOAT,
      averageFuelConsumption: DataTypes.FLOAT,
      dateRegistration: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
