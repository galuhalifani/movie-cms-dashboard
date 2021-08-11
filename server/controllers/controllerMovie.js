const { Movie, User, Genre, History } = require('../models')
const axios = require('axios')
const FormData = require('form-data')

class Controller {
    static getMovies(req, res, next) {
        let authorId;
        let genreId;
        let whereStatement;
        let sort = ['title', 'ASC']
        let movieWithoutUserPassword = []
        
        if (req.query.sort) {
            if (req.query.sort == 'newest') {
                sort = ['id', 'DESC']
            } else if (req.query.sort == 'oldest') {
                sort = ['id', 'ASC']
            }
        }

        if (req.query.authorid || req.query.genreid) { // check if there's query to filter by authorId (filter movie by author Id, for the 'My Movies' page)
            if (req.query.authorid) {
                authorId = +req.query.authorid
                whereStatement = {}
                whereStatement.authorId = authorId    
            } else if (req.query.genreid) {
                genreId = +req.query.genreid
                whereStatement = {}
                whereStatement.genreId = genreId                    
            }
            Movie.findAll({
                include: [User, Genre],
                order: [
                    sort
                ],
                where: whereStatement
            })
            .then(movies => {
                movieWithoutUserPassword = movies

                for (let i = 0; i < movies.length; i++) {
                    delete movieWithoutUserPassword[i].User.dataValues.password
                }

                res.status(200).json(movieWithoutUserPassword)
            })
            .catch(err => {
                next({ code: 500, message: err.message })
            })    
        } else { // if no query
            Movie.findAll({
                include: [User, Genre],
                order: [
                    sort
                ]
            })    
            .then(movies => {
                movieWithoutUserPassword = movies

                for (let i = 0; i < movies.length; i++) {
                    delete movieWithoutUserPassword[i].User.dataValues.password
                }

                res.status(200).json(movieWithoutUserPassword)
            })
            .catch(err => {
                next({ code: 500, message: err.message })
            })
        }
    }

    static createMovies(req, res, next) {
        let newMovie = {}
        let history = {}

        if (!req.file) { // if no file is uploaded
                newMovie.title = req.body.title
                newMovie.synopsis = req.body.synopsis
                newMovie.rating = req.body.rating
                newMovie.genreId = req.body.genreId
                newMovie.trailerUrl = req.body.trailerUrl
                newMovie.authorId = req.loggedUser.id
                newMovie.status = 'active'
    
                Movie.create(newMovie)
                .then(newMovie => {
                    history.movieId = newMovie.id
                    history.title = newMovie.title
                    history.description = `Movie with id ${newMovie.id} created`
                    history.updatedBy = req.loggedUser.email

                    return History.create(history)
                })
                .then(() => {
                    res.status(201).json(newMovie)
                })
                .catch(err => {
                    next({ name: err.name, validation: err.errors, code: 500, message: err.message })
                })    
        } else { // if file is uploaded
            let image = new FormData()

            let fileType = false
            let fileSize = false

            if (req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/png' || req.file.mimetype == 'image/gif') {
                fileType = true
            }

            if (req.file.size <= 230400) { // 1 kB = 1024 bytes; 225 kB = 230,400 bytes (according to google & my laptop)
                fileSize = true
            }
            if (fileType == true && fileSize == true) {
                image.append('file', req.file.buffer.toString("base64"))
                image.append('fileName', req.file.originalname)
                image.append('useUniqueFileName', 'false')
    
                console.log(req.file)
        
                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    auth: {
                        username: process.env.IMAGEKIT_KEY
                    },  
                    headers: {
                        ...image.getHeaders()
                    },
                    data: image
                })
                .then(newImage => {
                    newMovie.title = req.body.title
                    newMovie.synopsis = req.body.synopsis
                    newMovie.rating = req.body.rating
                    newMovie.genreId = req.body.genreId
                    newMovie.trailerUrl = req.body.trailerUrl
                    newMovie.imgUrl = newImage.data.url
                    newMovie.authorId = req.loggedUser.id
                    newMovie.status = 'active'
        
                    return Movie.create(newMovie)
                })
                .then(newMovie => {
                    history.movieId = newMovie.id
                    history.title = newMovie.title
                    history.description = `Movie with id ${newMovie.id} created`
                    history.updatedBy = req.loggedUser.email

                    return History.create(history)
                })
                .then(() => {
                    res.status(201).json(newMovie)
                })
                .catch(err => {
                    next({ name: err.name, validation: err.errors, code: 500, message: err.message })
                })    
            } else {
                if (fileType && !fileSize) {
                    next({ code: 400, message: 'Image size exceeds maximum limit. Max. size is 225kB' })
                } else if (!fileType && fileSize) {
                    next({ code: 400, message: 'Invalid image format. Only formats .jpg, .jpeg, .png, are allowed'})
                } else {
                    next({ code: 400, message: 'Invalid image format & file size. Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB' })
                }
            }
        }
    }

    static getMoviesById(req, res, next) {
        let movieId = req.params.id
        Movie.findByPk(movieId)
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

    static updateMovies(req, res, next) {
        let movieId = req.params.id
        let updatedData = req.body
        let history = {}

        if (!req.file || req.poster == 'undefined') { // if no image uploaded
            Movie.findByPk(movieId)
            .then(movie => {
                if (movie) {
                    let sentData = {
                        title: req.body.title,
                        synopsis: req.body.synopsis,
                        trailerUrl: req.body.trailerUrl,
                        rating: req.body.rating,
                        genreId: req.body.genreId
                    }
                    return Movie.update(sentData, {
                        where: {id: movieId}
                    })
                } else {
                    res.status(404).json({ message: 'error: movie not found'} )
                }                
            })
            .then(() => {
                history.movieId = movieId
                history.title = req.body.title
                history.description = `Movie with id ${movieId} updated`
                history.updatedBy = req.loggedUser.email

                return History.create(history)
            })
            .then(() => {
                res.status(200).json(updatedData)
            })
            .catch(err => {
                next({ name: err.name, validation: err.errors, code: 500, message: err.message })
            })
        } else {
            let image = new FormData()

            let fileType = false
            let fileSize = false

            if (req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/png' || req.file.mimetype == 'image/gif') {
                fileType = true
            }

            if (req.file.size <= 230400) { // 1 kB = 1024 bytes; 225 kB = 230,400 bytes (according to google & my laptop)
                fileSize = true
            }
            if (fileType == true && fileSize == true) {
                image.append('file', req.file.buffer.toString("base64"))
                image.append('fileName', req.file.originalname)
                image.append('useUniqueFileName', 'false')                
        
                axios({
                    url: 'https://upload.imagekit.io/api/v1/files/upload',
                    method: 'post',
                    auth: {
                        username: process.env.IMAGEKIT_KEY
                    },
                    headers: {
                        ...image.getHeaders() // what is this (?)
                    },
                    data: image
                })
                .then(newImage => {
                    updatedData.imgUrl = newImage.data.url
                    return Movie.findByPk(movieId)
                })
                .then(movie => {
                    if (movie) {
                        return Movie.update(updatedData, {
                            where: {id: movieId}
                        })
                    } else {
                        res.status(404).json({ message: 'error: movie not found'} )
                    }                
                })
                .then(() => {
                    history.movieId = movieId
                    history.title = req.body.title
                    history.description = `Movie with id ${movieId} updated`
                    history.updatedBy = req.loggedUser.email
    
                    return History.create(history)
                })
                .then(() => {
                    res.status(200).json(updatedData)
                })
                .catch(err => {
                    next({ name: err.name, validation: err.errors, code: 500, message: err.message })
                })   
            } else {
                if (fileType && !fileSize) {
                    next({ code: 400, message: 'Image size exceeds maximum limit. Max. size is 225kB' })
                } else if (!fileType && fileSize) {
                    next({ code: 400, message: 'Invalid image format. Only formats .jpg, .jpeg, .png, are allowed'})
                } else {
                    next({ code: 400, message: 'Invalid image format & file size. Only formats .jpg, .jpeg, .png, are allowed, with max. size of 225kB' })
                }
            }         
        }
    }

    static deleteMovie(req,res,next) {
        let movieId = req.params.id
        let movieName = ''
        let history = {}

        Movie.findByPk(movieId)
        .then(movie => {
            if (movie) {
                movieName += movie.title
                return Movie.destroy({
                    where: { id: movieId }
                })
            } else {
                res.status(404).json({ message: 'error: movie not found'} )
            }
        })
        .then(() => {
            history.movieId = movieId
            history.title = movieName
            history.description = `Movie with id ${movieId} permanently deleted`
            history.updatedBy = req.loggedUser.email

            return History.create(history)
        })
        .then(() => {
            res.status(200).json( {message: `${movieName} successfully deleted`} )
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })      
    }

    static seeAllImages(req,res,next) { // not used
        axios({
        url: 'https://api.imagekit.io/v1/files',
        method: 'get',
        auth: {
                username: process.env.IMAGEKIT_KEY
              }
        })
        .then(image => {
            res.status(200).json(image.data)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static updateStatus(req, res, next) {
        let movieId = req.params.id
        let previousStatus;
        let updatedStatus = req.body.status
        let movie;
        let history = {}

        Movie.findByPk(movieId)
        .then(foundMovie => {
            if (foundMovie) {
                movie = foundMovie
                previousStatus = movie.status
                return Movie.update({ status: updatedStatus }, {
                    where: {
                      id: movieId
                    }
                })
            } else {
                res.status(404).json({ message: 'error: movie not found'} )
            }
        })
        .then(() => {
            history.movieId = movieId
            history.title = movie.title
            history.description = `Movie with id ${movieId} status has been updated from ${previousStatus} to ${updatedStatus}`
            history.updatedBy = req.loggedUser.email

            return History.create(history)
        })
        .then(() => {
            res.status(200).json({message: `Success! Movie ${movie.title}'s status is now ${updatedStatus}`})
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static getHistory(req, res, next) {
        History.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        .then(data => {
            let output = []
            let history;

            for (let i = 0; i < data.length; i++) {
                history = {
                    movieId: data[i].movieId,
                    title: data[i].title,
                    description: data[i].description,
                    updatedBy: data[i].updatedBy,
                    createdAt: data[i].createdAt.toLocaleDateString()
                } 
                output.push(history)   
            }
            res.status(200).json(output)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })    
    }
}

module.exports = Controller