const express = require ('express')
const router = express.Router()
const ControllerUser = require('../controllers/controllerUser.js')
const userAuth = require ('../middlewares/authorizationUser.js')

router.get('/', ControllerUser.getAllUser)

router.use('/:id', userAuth) // authorization

router.get('/:id', ControllerUser.getUser)
router.put('/:id', ControllerUser.editUser)

module.exports = router