let hashPassword = require('../helpers/passwordHashingSeeder.js')
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('Users', [{
      name: "Customer 1",
      username: "customer1",
      email: "customer1@mail.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "customer",
      phoneNumber: "",
      address: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Customer 2",
      username: "customer2",
      email: "customer2@mail.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "customer",
      phoneNumber: "080808080808",
      address: "Jalan",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */return queryInterface.bulkDelete('Users')
  }
};
