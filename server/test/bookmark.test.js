const request = require('supertest');
const app = require('../app.js')
const { User, Genre, Movie, Bookmark } = require('../models')
const jwt = require('jsonwebtoken')

let user = {
    email: "test@email.com",
    password: "password123"
}

let author = {
    email: "author@email.com",
    password: "password123"
}

let accessTokenUser;
let accessTokenAdmin;
let genreIds=[]
let userId;
let authorId;
let movieIds=[]
let bookmarks = []
let movies = []

beforeAll(done => {
    Genre.bulkCreate([{
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
    .then(genre => {
        for (let i = 0; i < genre.length; i++) {
            genreIds.push(genre[i].id)
        }
        return User.bulkCreate([
            {...user, name: 'test', username:'test', role: 'customer'},
            {...author, name: 'author', username:'author', role: 'admin'}
        ])
    })
    .then(createdUser => {
        let userIndex;
        let adminIndex;
        for (let i = 0; i < createdUser.length; i++) {
            if (createdUser[i].role == 'admin') {
                authorId = createdUser[i].id
                adminIndex = i
            } else {
                userId = createdUser[i].id
                userIndex = i
            }
        }

        let payloadUser = {}
        payloadUser.id = createdUser[userIndex].id
        payloadUser.name = createdUser[userIndex].name
        payloadUser.username = createdUser[userIndex].username
        payloadUser.email = createdUser[userIndex].email
        payloadUser.role = createdUser[userIndex].role
        
        accessTokenUser = jwt.sign(payloadUser, process.env.JWT_KEY)

        let payloadAdmin = {}
        payloadAdmin.id = createdUser[adminIndex].id
        payloadAdmin.name = createdUser[adminIndex].name
        payloadAdmin.username = createdUser[adminIndex].username
        payloadAdmin.email = createdUser[adminIndex].email
        payloadAdmin.role = createdUser[adminIndex].role
        
        accessTokenAdmin = jwt.sign(payloadAdmin, process.env.JWT_KEY)

        let status;
        for (let i = 0; i < 20; i++) { // add 20 movies
            if (i % 2 == 0) {
                status = 'active'
            } else {
                status = 'inactive'
            }

            let movie = {}
            movie.title = Math.random().toString(36).substring(2);
            movie.synopsis = `Synopsis ${i}`
            movie.rating = Math.floor(Math.random() * 5) + 1
            movie.genreId = genreIds[Math.floor(Math.random() * 8)]
            movie.trailerUrl = `trailer${i}.com`
            movie.imgUrl = `img${i}.jpg`
            movie.authorId = authorId
            movie.status = status

            movies.push(movie)
        }

        return Movie.bulkCreate(movies)
    })
    .then(movies => {
        for (let k = 0; k < movies.length; k++) {
            movieIds.push(movies[k].id)
        }

        for (let l = 0; l < 10; l++) { // add 10 bookmarks
            let bookmark = {}
            bookmark.userId = userId
            bookmark.movieId = movieIds[Math.floor(Math.random() * 10)]

            bookmarks.push(bookmark)
        }

        return Bookmark.bulkCreate(bookmarks)
    })
    .then(() => {
        done()
    })
    .catch(err => {
        done(err)
    })
})

afterAll(done => {
    Movie.destroy({ truncate: true, cascade: true})
    .then(() => {
        return User.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        return Genre.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        return Bookmark.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Get Bookmark - SUCCESS', () => {
    test('Get all bookmarks', (done) => {
        request(app)
        .get('/platform/mybookmark')
        .set('accessToken', accessTokenUser)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body.length).toEqual(bookmarks.length)
                for (let i = 0; i < res.body.length; i++) {
                    expect(res.body[i]).toHaveProperty('id', expect.any(Number))
                    expect(res.body[i]).toHaveProperty('title', expect.any(String))
                    expect(res.body[i]).toHaveProperty('synopsis', expect.any(String))
                    expect(res.body[i]).toHaveProperty('rating', expect.any(Number))
                    expect(res.body[i].rating).toBeGreaterThan(0)
                    expect(res.body[i].rating).toBeLessThan(6)
                    expect(res.body[i]).toHaveProperty('genreId', expect.any(Number))
                    expect(res.body[i].genreId).toBeGreaterThan(0)
                    expect(res.body[i]).toHaveProperty('trailerUrl', expect.any(String))
                    expect(res.body[i]).toHaveProperty('imgUrl', expect.any(String))
                    expect(res.body[i]).toHaveProperty('status', expect.any(String))
                    expect(res.body[i]).toHaveProperty('authorId', authorId)    
                }
                done()
            }
        })
    })
})

describe('Add Bookmark - SUCCESS', () => {
    test('Add bookmark', (done) => {
        let movie_id = movieIds[Math.floor(Math.random() * 10)]
        request(app)
        .post(`/platform/bookmark/${movie_id}`)
        .set('accessToken', accessTokenUser)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(201)
                expect(res.body).toHaveProperty('message', "Success adding new bookmark")
                expect(res.body).toHaveProperty('id', expect.any(Number))
                expect(res.body).toHaveProperty('userId', userId)
                expect(res.body).toHaveProperty('movieId', expect.any(Number))
                expect(res.body).toHaveProperty('movieTitle', expect.any(String))
                done()
            }
        })
    })
})

describe('Add Bookmark - FAILED', () => {
    test('Movie id does not exist', (done) => {
        let movie_id = -10
        request(app)
        .post(`/platform/bookmark/${movie_id}`)
        .set('accessToken', accessTokenUser)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(404)
                expect(res.body).toHaveProperty('message', 'error: movie not found')
                done()
            }
        })
    })
})

describe('Get Bookmark - FAILED', () => {
    test('User has not logged in', (done) => {
        request(app)
        .get('/platform/mybookmark')
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(401)
                expect(res.body).toHaveProperty('error', 'Unauthorized')
                expect(res.body).toHaveProperty('message', "Please login first")
                done()
            }
        })
    })
    test('Logged user is not a customer', (done) => {
        request(app)
        .get('/platform/mybookmark')
        .set('accessToken', accessTokenAdmin)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(403)
                expect(res.body).toHaveProperty('error', 'Forbidden')
                expect(res.body).toHaveProperty('message', "Only customers can see or perform bookmark actions")
                done()
            }
        })
    })
})