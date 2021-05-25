'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Servicing.belongsTo(models.Car, {
        foreignKey: 'CarId',
        onDelete: 'CASCADE'
      });
    }
  };
  Servicing.init({
    // id: {
    //   allowNull: false,
    //   primaryKey: true,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4
    // },
    current: DataTypes.DATE,
    next: DataTypes.DATE,
    valid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Servicing',
  });
  return Servicing;
};