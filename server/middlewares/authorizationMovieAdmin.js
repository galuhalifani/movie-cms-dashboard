function movieAuthAdmin(req, res, next) {
    const { Movie } = require('../models')

    if (req.loggedUser.role == 'admin') {
        next()        
    } else {
        next({ code: 403, message: 'Only Admin is authorized to perform action' })
    }
}


module.exports = movieAuthAdmin