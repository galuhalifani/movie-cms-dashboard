const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/controllerUser.js')
const authentication = require ('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')

let homeRoute = require('./homeRoute.js')
let movieRoute = require('./movieRoute.js')
let userRoute = require('./userRoute.js')
let customerRoute = require('./customerRoute.js')

router.use('/', homeRoute);
router.post('/register', ControllerUser.register)
router.post('/googlelogin', ControllerUser.googleLogin)
router.post('/login', ControllerUser.login)
router.use('/authors', ControllerUser.getNonCustomers);
router.use('/platform', customerRoute)

router.use(authentication)

router.get('/logout', ControllerUser.logout)
router.use('/movies', movieRoute);
router.use('/users', userRoute);

router.use(errorHandler)

module.exports = router