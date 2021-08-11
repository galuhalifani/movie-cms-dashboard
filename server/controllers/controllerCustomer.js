const { User, Movie, Genre, Bookmark } = require('../models')
let bcrypt = require('bcryptjs');
let generateJwt = require('../helpers/jwt.js').generateJwt
const {OAuth2Client} = require('google-auth-library');
let getPagination = require('../helpers/pagination.js').getPagination
let getPagingData = require('../helpers/pagination.js').getPagingData

class Controller {
    static register(req, res, next) {
        let newUser = req.body
        newUser.role = 'customer'

        if (req.body.username == '' || req.body.username == null) {
            newUser.username = req.body.email              
        } else {
            newUser.username = req.body.username
        }

        if (req.body.name == '' || req.body.name == null) {
            newUser.name = req.body.username          
        } else {
            newUser.name = req.body.name
        }

        User.create(newUser)
        .then(user => {
            let data = {}
            data.message = 'Success creating new user'
            data.id = user.id
            data.name = user.name
            data.username = user.username
            data.email = user.email
            data.role = user.role
            data.phoneNumber = user.phoneNumber
            data.address = user.address

            res.status(201).json(data)
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static login(req, res, next) {
        let userEmail = req.body.email
        let userPassword = req.body.password

        User.findOne({
            where: {email: userEmail}
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(userPassword, user.password) === true) {
                    let payload = {}
                    payload.id = user.id
                    payload.name = user.name
                    payload.username = user.username
                    payload.email = user.email
                    payload.role = user.role

                    let accessToken = generateJwt(payload)

                    res.status(200).json({accessToken:accessToken, name:payload.name, role:payload.role, id:payload.id})
                } else {
                    next({ code: 401, message: 'Invalid username/password' })
                }
            } else {
                next({ code: 401, message: 'Invalid username/password' })
            }
        })
        .catch(err => {
            next({ code: 500, message: `${err.message}` })
        })
    }

    static googleLogin(req, res, next) {
        // console.log('MASUKK AXIOSSSSSSSSSSS')
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let payload = null
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then((ticket) => {
            payload = ticket.getPayload();
            // console.log(payload, 'PAYLOAD')
            return payload
        })
        .then(payload => {
            // console.log(payload.email)
            return User.findOne({ 
                where: { email: payload.email } 
            })
        })
        .then(loggedUser => {
            // console.log(loggedUser, '<<< LOGGED USER')
            if (loggedUser) {
              return loggedUser
            } else {
                let newUser = {}
                newUser.email = payload.email
                newUser.role = 'customer'
                newUser.name = payload.name
                newUser.username = payload.email
                newUser.password = process.env.GOOGLE_PASSWORD
        
                return User.create(newUser)
            }
        })
        .then(user => {
            // console.log(user, '<<<<< USERRR')
            let googleUser = {}
            googleUser.id = user.id
            googleUser.name = user.name
            googleUser.username = user.username
            googleUser.email = user.email
            googleUser.role = user.role
            
            let accessToken = generateJwt(googleUser)

            res.status(200).json({accessToken:accessToken, name:googleUser.name, role:googleUser.role, id:googleUser.id})
        })
        .catch(err => {
            console.log('masuk error')
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static getMovies(req, res, next) {
        let authorId;
        let genreId;
        let rating;
        let whereStatement = {}
        let sort = ['title', 'ASC']
        let movieWithoutUserPassword;
        let page; 
        let size;
        let limit;
        let offset;
        
        // optional sort query
        if (req.query.sort) {
            if (req.query.sort == 'newest') {
                sort = ['id', 'DESC']
            } else if (req.query.sort == 'oldest') {
                sort = ['id', 'ASC']
            }
        }
        
        if (req.query.authorid) {
            authorId = req.query.authorid
            whereStatement.authorId = authorId    
        } 
        if (req.query.genreid) {
            genreId = req.query.genreid
            whereStatement.genreId = genreId                    
        } 
        if (req.query.rating) {
            rating = req.query.rating
            whereStatement.rating = rating 
        } 
        if (req.query.page || req.query.size) { // if nothing is inputted, all movies will be fetched in one page
            if (req.query.page) { // if one is inputted, default = page:0, size:3
                page = req.query.page
            } 
            if (req.query.size) {
                size = req.query.size  
            }

            limit = getPagination(page, size).limit
            offset = getPagination(page, size).offset        
        }                   

        Movie.findAndCountAll({
            include: [User, Genre],
            order: [
                sort
            ],
            limit,
            offset,
            where: whereStatement
        })
        .then(movies => {
            movieWithoutUserPassword = movies

            for (let i = 0; i < movies.length; i++) {
                delete movieWithoutUserPassword[i].User.dataValues.password
            }

            movieWithoutUserPassword = getPagingData(movieWithoutUserPassword, page, limit)

            res.status(200).json(movieWithoutUserPassword)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })    
    }

    static getMoviesById(req, res, next) {
        let movieId = req.params.id
        Movie.findOne({
            include: [User, Genre],
            where: {id: movieId}
        })
        .then(movie => {
            if (movie) {
                res.status(200).json(movie)
            } else {
                res.status(404).json({ message: 'error: movie not found'} )
            }
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static addBookmark(req, res, next) {
        let movieId = req.params.movieId
        let userId = req.loggedUser.id
        let bookmarkedMovie;

        Bookmark.findOne({
            where: {movieId: movieId, userId: userId}
        })
        .then(bookmark => {
            if (bookmark) {
                res.status(400).json({message: 'You already bookmarked this movie'})
            } else {
                return Movie.findByPk(movieId)
            }
        })
        .then(movie => {
            if (movie) {
                bookmarkedMovie = movie
                return Bookmark.create({
                    userId: req.loggedUser.id,
                    movieId: movieId
                })
                .then(bookmark => {
                    // console.log(bookmark)
                    let data = {}
                    data.message = 'Success adding new bookmark'
                    data.id = bookmark.id
                    data.userId = bookmark.userId
                    data.movieId = bookmarkedMovie.id
                    data.movieTitle = bookmarkedMovie.title

                    res.status(201).json(data)
                })
                .catch(err => {
                    next({ code: 500, message: err.message })
                })
            } else {
                res.status(404).json({ message: 'error: movie not found'} )
            }
        })
    }

    static seeBookmark(req, res, next) {
        let userId = req.loggedUser.id

        Bookmark.findAll({
            where: {userId: userId},
            include: {
                model: Movie,
                include: [User, Genre]
            }
        })
        .then(movies => {
            let movieData = []
            for (let i = 0; i < movies.length; i++) {
                movieData.push(movies[i].Movie)
            }
            res.status(200).json(movieData) // returning only the Movie Array
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }
}

module.exports = Controller