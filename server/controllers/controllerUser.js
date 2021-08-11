const { User, Movie } = require('../models')
let bcrypt = require('bcryptjs');
let generateJwt = require('../helpers/jwt.js').generateJwt
const {OAuth2Client} = require('google-auth-library');
const { Op } = require("sequelize");

class Controller {
    static getAllUser(req, res, next) { // not used
        User.findAll({
            order: [
                ['id', 'ASC']
            ],
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static getNonCustomers(req, res, next) { // not used
        User.findAll({
            where: {
                [Op.not]: { role: 'customer' }
            },
            order: [
                ['id', 'ASC']
            ],
        })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static getUser(req, res, next) {
        let userId = req.params.id
        User.findOne({
            where: {
                id: userId
            },
            include: Movie
        })
        .then(user => {
            if (user) {
                let selectedUser = {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    phoneNumber: user.phoneNumber,
                    address: user.address,
                    Movies: user.Movies
                }
                res.status(200).json(selectedUser)
            } else {
                res.status(404).json({ message: 'error: user not found'} )
            }
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static register(req, res, next) {
        let newUser = req.body
        newUser.role = 'admin'

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

    static logout(req, res, next) {
        if (req.loggedUser || req.headers.accesstoken) {
            delete req.headers.accesstoken
            delete req.loggedUser
            res.status(200).json({message: 'Successfully logged-out'})
        } else {
            next({ code: 400, message: `No one was logged-in` })
        }
    }

    static googleLogin(req, res, next) {
        console.log('MASUKK AXIOSSSSSSSSSSS')
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let payload = null
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then((ticket) => {
            console.log(ticket, 'TICKETTTTTT')
            // console.log(ticket, '<<<<TICKETTTTT')
            payload = ticket.getPayload();
            console.log(payload, 'PAYLOAD')
            return payload
        })
        .then(payload => {
            // console.log(payload.email)
            return User.findOne({ 
                where: { email: payload.email } 
            })
        })
        .then(loggedUser => {
            console.log(loggedUser, '<<< LOGGED USER')
            if (loggedUser) {
              return loggedUser
            } else {
                let newUser = {}
                newUser.email = payload.email
                newUser.role = 'staff'
                newUser.name = payload.name
                newUser.username = payload.email
                newUser.password = process.env.GOOGLE_PASSWORD
        
                return User.create(newUser)
            }
        })
        .then(user => {
            console.log(user, '<<<<< USERRR')
            let googleUser = {}
            googleUser.id = user.id
            googleUser.name = user.name
            googleUser.username = user.username
            googleUser.email = user.email
            googleUser.role = user.role
            
            console.log(googleUser, "Google User") // MASUK

            let accessToken = generateJwt(googleUser)

            console.log(accessToken, 'ACCESS TOKEN') // GAK MASUK
            res.status(200).json({accessToken:accessToken, name:googleUser.name, role:googleUser.role, id:googleUser.id})
        })
        .catch(err => {
            console.log('masuk error')
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })
    }

    static editUser(req, res, next) {
        let userId = +req.params.id
        let sentData;
        let foundUser;

        User.findByPk(userId)
        .then(user => {
            if (user) {
                sentData = {
                    name: req.body.name,
                    username: req.body.username,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address
                }

                if (!req.body.username) {
                    sentData.username = foundUser.email
                }
                if (!req.body.name) {
                    sentData.name = sentData.username
                }

                return User.update(sentData, {
                    where: {id: userId}
                })
            } else {
                res.status(404).json({ message: 'error: user not found'} )
            }                
        })
        .then(() => {
            return User.findOne({
                where: {
                    id: userId
                }
            })
        })
        .then((user) => {
            return User.findOne({
                where: {
                    id: userId
                }
            })
        })
        .then((user) => {
            foundUser = user
            delete foundUser.dataValues.password
            res.status(200).json(foundUser)
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })         
    }
}

module.exports = Controller