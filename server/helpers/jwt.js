const jwt = require('jsonwebtoken');

function generateJwt(payload) {
    return jwt.sign(payload, process.env.JWT_KEY);
}

function verifyJwt(token) {
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = {
    generateJwt,
    verifyJwt
}
