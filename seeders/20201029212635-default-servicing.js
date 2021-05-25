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
    await queryInterface.bulkInsert('Servicings', [{
      id: 1,
      current: '2020-06-29 23:13:26',
      next: '2021-06-28 23:13:26',
      valid: 1,
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
