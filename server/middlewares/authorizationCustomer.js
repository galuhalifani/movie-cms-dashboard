function bookmarkAuthCustomer(req, res, next) {
    const { Movie } = require('../models')

    if (req.loggedUser.role == 'customer') {
        next()        
    } else {
        next({ code: 403, message: 'Only customers can see or perform bookmark actions' })
    }
}


module.exports = bookmarkAuthCustomer