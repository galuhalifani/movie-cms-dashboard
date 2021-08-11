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
      name: "Galuh Adika Alifani",
      username: "galuhalifani",
      email: "galuh.adika@gmail.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "admin",
      phoneNumber: "081319023264",
      address: "Jalan Jalan",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Ilya Kravtsov",
      username: "ilyakrav",
      email: "ik@pouchnation.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "staff",
      phoneNumber: "081319023264",
      address: "Jalan Jalan",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Megayani R.",
      username: "megayani",
      email: "mega@email.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "staff",
      phoneNumber: null,
      address: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Admin",
      username: "admin",
      email: "admin@test.com",
      password: hashPassword(process.env.SEED_USER_PASSWORD),
      role: "admin",
      phoneNumber: "081319023264",
      address: "",
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
