'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: "Nicolas", createdAt: new Date(), updatedAt: new Date() },
      { username: "Rosanna", createdAt: new Date(), updatedAt: new Date() },
      { username: "Quentin", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
