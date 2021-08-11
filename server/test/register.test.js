const request = require('supertest');
const app = require('../app.js')
const { User } = require('../models')

let user = {
    email: "test@email.com",
    password: "password123",
    name: '',
    username: 'test',
    phoneNumber: '',
    address: ''
}

afterAll(done => {
    User.destroy({ truncate: true, cascade: true})
    .then(() => {
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Register - SUCCESS', () => {
    test(`Register to have keys: message, id, name, username, email, role, phoneNumber, address`, (done) => {
        request(app)
        .post('/platform/register')
        .send(user)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                expect(res.status).toBe(201)
                expect(res.body).toHaveProperty('message', 'Success creating new user')
                expect(res.body).toHaveProperty('email', user.email)
                expect(res.body).toHaveProperty('id', expect.any(Number))
                expect(res.body).toHaveProperty('role', 'customer')
                expect(res.body).toHaveProperty('name', expect.any(String))
                expect(res.body).toHaveProperty('username', expect.any(String))
                expect(res.body).toHaveProperty('phoneNumber', user.phoneNumber)
                expect(res.body).toHaveProperty('address', user.address)
                expect(res.body).not.toHaveProperty('password')
                done()
            }
        })

    })
})

describe('Register - FAILED', () => {
    test('Email Not Inputted', (done) => {
        request(app)
        .post('/platform/register')
        .send({
            password: 'password123',
            name: '',
            username: 'test',
            phoneNumber: '',
            address: ''
        })
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                let errorMsg = [
                    "Email can not be empty",
                ]
                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('message', errorMsg)
                expect(res.body).toHaveProperty('error', 'Input Error')
                done()
            }
        })
    })
    test('Password Not Inputted', (done) => {
        request(app)
        .post('/platform/register')
        .send({
            email: 'test@mail.com',
            name: '',
            username: 'test',
            phoneNumber: '',
            address: ''
        })
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                let errorMsg = [
                    "Password can not be empty"
                ]
                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('message', errorMsg)
                expect(res.body).toHaveProperty('error', 'Input Error')
                done()
            }
        })
    })
    test('Email is empty string', (done) => {
        request(app)
        .post('/platform/register')
        .send({
            email: "",
            password: "password123",
            name: '',
            username: 'test',
            phoneNumber: '',
            address: ''
        })
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                let errorMsg = [
                    "Email can not be empty", "Invalid e-mail address"
                ]
                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('message', errorMsg)
                expect(res.body).toHaveProperty('error', 'Input Error')
                done()
            }
        })
    })
    test('Password is empty string', (done) => {
        request(app)
        .post('/platform/register')
        .send({
            email: "test@mail.com",
            password: "",
            name: '',
            username: 'test',
            phoneNumber: '',
            address: ''
        })
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                let errorMsg = [
                    "Password can not be empty", "Min. password length is 5"
                ]
                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('message', errorMsg)
                expect(res.body).toHaveProperty('error', 'Input Error')
                done()
            }
        })
    })
    test('Email is not unique', (done) => {
        request(app)
        .post('/platform/register')
        .send(user)
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                let email = "test@email.com"

                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('error', 'Input Error')
                expect(res.body).toHaveProperty('message', expect.any(Array))
                expect(user.email).toEqual(email)
                expect(res.body.message).toEqual(["Email is already taken. Please use another email"])                
                done()
            }
        })
    })
    test('Email is invalid', (done) => {
        request(app)
        .post('/platform/register')
        .send({
            email: 'test',
            password: 'password123',
            name: '',
            username: 'test',
            phoneNumber: '',
            address: ''
        })
        .end((err, res) => {
            if(err) {
                done(err)
            } else {
                expect(res.status).toBe(400)
                expect(res.body).toHaveProperty('message', expect.any(Array))
                expect(res.body).toHaveProperty('error', 'Input Error')
                expect(res.body).toHaveProperty('message', ['Invalid e-mail address']);
                done()
            }
        })
    })
})