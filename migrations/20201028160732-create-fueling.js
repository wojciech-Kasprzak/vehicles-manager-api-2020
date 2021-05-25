"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Fuelings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      amountFuel: {
        type: Sequelize.FLOAT,
      },
      kilometers: {
        type: Sequelize.FLOAT,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
      },
      averageFuelConsumption: {
        type: Sequelize.FLOAT,
      },
      date: {
        type: Sequelize.DATE,
      },
      CarId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Cars",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Fuelings");
  },
};
