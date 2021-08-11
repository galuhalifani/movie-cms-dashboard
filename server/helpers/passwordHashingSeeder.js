function hashPassword (password) {
    let bcrypt = require('bcryptjs');
    let salt = bcrypt.genSaltSync(5);
    let hash = bcrypt.hashSync(password, salt);
        
    return hash
}

module.exports = hashPassword