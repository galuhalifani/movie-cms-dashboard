function userAuth(req, res, next) {
    const { User } = require('../models')

    if (req.loggedUser.role == 'admin') {
        next()        
    } else {
        let userId = +req.params.id
        User.findByPk(userId)
        .then(user => {
            if (user) { // if param is valid
                if (req.loggedUser.id == user.id) {
                    next()
                } else if (req.loggedUser.id != user.id) {
                next({ code: 403, message: 'User not authorized to access the page / perform action' })
                }
            } else {
                res.status(404).json({ message: 'error: user not found'})
            }
        })
        .catch(err => {
            next({ code: 500, message: `${err.message}` })
        })
    }
}


module.exports = userAuth