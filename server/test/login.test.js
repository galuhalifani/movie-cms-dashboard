const request = require('supertest');
const app = require('../app.js')
const { User } = require('../models')

let user = {
    email: "test@email.com",
    password: "password123"
}

beforeAll(done => {
    User.create({...user, name: 'test', username:'test', role: 'admin'})
    .then(data => {
        // console.log(data, 'SUCCESS CREATE')
        done()
    })
    .catch(err => {
        // console.log('ERRRRRORRR CREATE')
        done(err)
    })
})

afterAll(done => {
    User.destroy({ truncate: true, cascade: true})
    .then(() => {
        // console.log('destroyed')
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Login - SUCCESS', () => {
    test('Login success, to have keys: accessToken, name, role, id', (done) => {
        request(app)
        .post('/platform/login')
        .send(user)
        .end((err, res) => {
            if (err) {
                done(err)
            }
            else {
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty('accessToken', expect.any(String))
                expect(res.body).toHaveProperty('name', expect.any(String))
                expect(res.body).toHaveProperty('role', 'admin')
                expect(res.body).toHaveProperty('id', expect.any(Number))
                expect(res.body).not.toHaveProperty('password')
                done()
            }
        })
    })
})

describe('Login - FAILED', () => {
    test('Wrong Password', (done) => {
        request(app)
        .post('/platform/login')
        .send({...user, password: 'password'})
        .end((err, res) => {
            if (err) done(err)
            else {
                expect(res.status).toBe(401)
                expect(res.body).toHaveProperty('error', 'Unauthorized')
                expect(res.body).toHaveProperty('message', 'Invalid username/password')
                done()
            }
        })
    })
    test('Email not found', (done) => {
        request(app)
        .post('/platform/login')
        .send({...user, email: 'test@test.com'})
        .end((err, res) => {
            if (err) done(err)
            else {
                expect(res.status).toBe(401)
                expect(res.body).toHaveProperty('error', 'Unauthorized')
                expect(res.body).toHaveProperty('message', 'Invalid username/password')
                done()
            }
        })
    })
})