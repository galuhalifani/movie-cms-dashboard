const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerMovie.js')
const movieAuth = require ('../middlewares/authorizationMovie.js')
const movieAuthAdmin = require ('../middlewares/authorizationMovieAdmin.js')
const multer = require('multer')
var upload = multer();

router.get('/', Controller.getMovies)

router.post('/', upload.single('poster'), Controller.createMovies) // no middleware, imageKit API langsung di controller

router.get('/image', Controller.seeAllImages) // see all uploaded images

router.get('/history', Controller.getHistory)

router.get('/:id', Controller.getMoviesById)

router.use('/:id', movieAuth) // authorization

router.put('/:id', upload.single('poster'), Controller.updateMovies)  // no middleware, imageKit API langsung di controller

router.delete('/:id', Controller.deleteMovie)

router.use('/:id', movieAuthAdmin) // authorization

router.patch('/:id', Controller.updateStatus)

module.exports = router