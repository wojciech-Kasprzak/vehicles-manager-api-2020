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

    await queryInterface.bulkInsert('Cars', [
      {
        id: 1,
        brand: 'Fiat',
        model: 'Putno Evo',
        milage: 159000,
        averageFuelConsumption: 5.8,
        dateRegistration: '2011-10-06',
        createdAt: '2020-10-06 23:13:26',
        updatedAt: '2020-10-06 23:13:26',
      }
    ], {});

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
