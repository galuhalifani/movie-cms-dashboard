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
     return queryInterface.bulkInsert('Genres', [{
      name: "Horror",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Thriller",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Drama",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Romance",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Documentary",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Comedy",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Science Fiction",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Fantasy",
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
     */return queryInterface.bulkDelete('Genres')
  }
};
