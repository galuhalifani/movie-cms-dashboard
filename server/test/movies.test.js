const request = require('supertest');
const app = require('../app.js')
const { User, Genre, Movie } = require('../models')
const jwt = require('jsonwebtoken')

let author1 = {
    email: "test@email.com",
    password: "password123"
}

let author2 = {
    email: "test2@email.com",
    password: "password123"
}

let genreIds=[]
let authorIds=[]
let movieIds=[]
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
            {...author1, name: 'test1', username:'test1', role: 'admin'},
            {...author2, name: 'test2', username:'test2', role: 'admin'},
        ])
    })
    .then(createdUser => {
        for (let j = 0; j < createdUser.length; j++) {
            authorIds.push(createdUser[j].id)
        }

        let status;

        for (let i = 0; i < 20; i++) {
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
            movie.authorId = createdUser[Math.floor(Math.random() * 1)].id
            movie.status = status

            movies.push(movie)
        }

        return Movie.bulkCreate(movies)
    })
    .then(movies => {        
        for (let k = 0; k < movies.length; k++) {
            movieIds.push(movies[k].id)
        }

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
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Get all movies - SUCCESS', () => {
    test('Get all movies without filter', (done) => {
        request(app)
        .get('/platform/movies')
        // .set('accessToken', accessToken)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body.movies.length).toEqual(movies.length)
                for (let i = 0; i < res.body.movies.length; i++) {
                    expect(res.body.movies[i]).toHaveProperty('title', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('synopsis', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('rating', expect.any(Number))
                    expect(res.body.movies[i].rating).toBeGreaterThan(0)
                    expect(res.body.movies[i].rating).toBeLessThan(6)
                    expect(res.body.movies[i]).toHaveProperty('genreId', expect.any(Number))
                    expect(res.body.movies[i].genreId).toBeGreaterThan(0)
                    expect(res.body.movies[i]).toHaveProperty('trailerUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('imgUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('status', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('authorId', expect.any(Number))
                }
                done()
            }
        })
    })
    test('Get all movies with 1 filter (genre)', (done) => {
        let genre_id = genreIds[Math.floor(Math.random() * 8)]
        let query = `genreid=${genre_id}`
        
        request(app)
        .get(`/platform/movies?${query}`)
        // .set('accessToken', accessToken)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body.movies.length).toEqual(res.body.totalItems)
                for (let i = 0; i < res.body.movies.length; i++) {
                    expect(res.body.movies[i]).toHaveProperty('title', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('synopsis', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('rating', expect.any(Number))
                    expect(res.body.movies[i].rating).toBeGreaterThan(0)
                    expect(res.body.movies[i].rating).toBeLessThan(6)
                    expect(res.body.movies[i]).toHaveProperty('genreId', genre_id)
                    expect(res.body.movies[i].genreId).toBeGreaterThan(0)
                    expect(res.body.movies[i]).toHaveProperty('trailerUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('imgUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('status', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('authorId', expect.any(Number))
                }
                done()
            }
        })
    })
    test('Get all movies with 3 filters (genre, author, rating)', (done) => {
        let genre_id = genreIds[Math.floor(Math.random() * 8)]
        let author_id = authorIds[Math.floor(Math.random() * 1)]
        let rating = Math.floor(Math.random() * 5) + 1
        let query = `genreid=${genre_id}&authorid=${author_id}&rating=${rating}`

        request(app)
        .get(`/platform/movies?${query}`)
        // .set('accessToken', accessToken)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body.movies.length).toEqual(res.body.totalItems)
                for (let i = 0; i < res.body.movies.length; i++) {
                    expect(res.body.movies[i]).toHaveProperty('title', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('synopsis', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('rating', rating)
                    expect(res.body.movies[i].rating).toBeGreaterThan(0)
                    expect(res.body.movies[i].rating).toBeLessThan(6)
                    expect(res.body.movies[i]).toHaveProperty('genreId', genre_id)
                    expect(res.body.movies[i].genreId).toBeGreaterThan(0)
                    expect(res.body.movies[i]).toHaveProperty('trailerUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('imgUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('status', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('authorId', author_id)
                }
                done()
            }
        })
    })
    test('Get a movie based on id', (done) => {
        let movie_id = movieIds[Math.floor(Math.random() * 10)]
        request(app)
        .get(`/platform/movies/${movie_id}`)
        // .set('accessToken', accessToken)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty('title', expect.any(String))
                expect(res.body).toHaveProperty('synopsis', expect.any(String))
                expect(res.body).toHaveProperty('rating', expect.any(Number))
                expect(res.body.rating).toBeGreaterThan(0)
                expect(res.body.rating).toBeLessThan(6)
                expect(res.body).toHaveProperty('genreId', expect.any(Number))
                expect(res.body.genreId).toBeGreaterThan(0)
                expect(res.body).toHaveProperty('trailerUrl', expect.any(String))
                expect(res.body).toHaveProperty('imgUrl', expect.any(String))
                expect(res.body).toHaveProperty('status', expect.any(String))
                expect(res.body).toHaveProperty('authorId', expect.any(Number))
                done()
            }
        })
    })
    test('Get all movies based on pagination', (done) => {
        let page = 3
        // default items per page (size) = 3

        request(app)
        .get(`/platform/movies?page=${page}`)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty('totalItems', movies.length)
                expect(res.body).toHaveProperty('totalPages', Math.ceil(movies.length/3))
                expect(res.body).toHaveProperty('currentPage', page)
                expect(res.body.movies.length).toEqual(3)
                for (let i = 0; i < res.body.movies.length; i++) {
                    expect(res.body.movies[i]).toHaveProperty('title', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('synopsis', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('rating', expect.any(Number))
                    expect(res.body.movies[i].rating).toBeGreaterThan(0)
                    expect(res.body.movies[i].rating).toBeLessThan(6)
                    expect(res.body.movies[i]).toHaveProperty('genreId', expect.any(Number))
                    expect(res.body.movies[i].genreId).toBeGreaterThan(0)
                    expect(res.body.movies[i]).toHaveProperty('trailerUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('imgUrl', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('status', expect.any(String))
                    expect(res.body.movies[i]).toHaveProperty('authorId', expect.any(Number))
                }
                done()
            }
        })
    })
})
describe('Get movie - FAILED', () => {
    test('Movie id does not exist', (done) => {
        let movie_id = -10
        request(app)
        .get(`/platform/movies/${movie_id}`)
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
