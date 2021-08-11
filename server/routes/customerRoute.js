const express = require('express')
const router = express.Router()
const ControllerCustomer = require('../controllers/controllerCustomer.js')
const bookmarkAuthCustomer = require ('../middlewares/authorizationCustomer.js')
const authentication = require ('../middlewares/authentication.js')

router.post('/register', ControllerCustomer.register)
router.post('/googlelogin', ControllerCustomer.googleLogin)
router.post('/login', ControllerCustomer.login)
router.get('/movies', ControllerCustomer.getMovies);
router.get('/movies/:id', ControllerCustomer.getMoviesById);

router.use(authentication)
router.use('/:id', bookmarkAuthCustomer) // authorization

router.post('/bookmark/:movieId', ControllerCustomer.addBookmark);
router.get('/mybookmark', ControllerCustomer.seeBookmark);

module.exports = router
