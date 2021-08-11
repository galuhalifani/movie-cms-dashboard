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
     return queryInterface.bulkInsert('Movies', [{
      title: "Doraemon: Nobita's Dinosaur - 2006",
      synopsis: "Doraemon - Nobita's Dinosaur 2006, also known as Doraemon: The Movie 2006 and Doraemon and the Little Dinosaur, is a traditionally animated feature film which is a remake of the first, 1980, Doraemon film Doraemon: Nobita's Dinosaur.",
      trailerUrl: "https://www.youtube.com/embed/1udlBviHgzQ",
      imgUrl: "https://ik.imagekit.io/77pzczg37zw/doraemon-poster-1.jpg",
      rating: 5,
      authorId: 2,
      genreId: 7,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Harry Potter",
      synopsis: "A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery.",
      trailerUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
      imgUrl: "https://ik.imagekit.io/77pzczg37zw/HP.jpg",
      rating: 4,
      authorId: 3,
      genreId: 9,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Love Story (1970)",
      synopsis: "Love Story is a 1970 American romantic drama written by Erich Segal, who was also the author of the best-selling 1970 novel of the same name",
      trailerUrl: "https://www.youtube.com/embed/JASEIR8hjzk",
      imgUrl: "https://ik.imagekit.io/77pzczg37zw/love-story-1970-poster.jfif",
      rating: 4,
      authorId: 1,
      genreId: 5,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Titanic",
      synopsis: "Titanic is a 1997 American epic romance and disaster film directed, written, co-​produced, and co-edited by James Cameron.",
      trailerUrl: "https://www.youtube.com/embed/cIJ8ma0kKtY",
      imgUrl: "https://ik.imagekit.io/77pzczg37zw/titanic-poster.jpg",
      rating: 5,
      authorId: 1,
      genreId: 5,
      status: 'active',
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
     */return queryInterface.bulkDelete('Movies')
  }
};
