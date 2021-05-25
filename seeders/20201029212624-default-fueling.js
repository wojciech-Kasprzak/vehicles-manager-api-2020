'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Fuelings', [{
      id: 1,
      price: 4.44,
      amountFuel: 39.5,
      kilometers: 654.3,
      date: '2020-10-29 23:13:26',
      createdAt: '2020-10-06 23:13:26',
      updatedAt: '2020-10-06 23:13:26',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
