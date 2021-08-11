function movieAuth(req, res, next) {
    const { Movie } = require('../models')

    if (req.loggedUser.role == 'admin') {
        next()        
    } else {
        let movieId = +req.params.id
        console.log(movieId)
        Movie.findByPk(movieId)
        .then(movie => {
            if (movie) { // if param is valid
                if (req.loggedUser.id == movie.authorId) {
                    next()
                } else if (req.loggedUser.id != movie.authorId) {
                next({ code: 403, message: 'User not authorized to access the page / perform action' })
                }
            } else {
                res.status(404).json({ message: 'error: movie not found'})
            }
        })
        .catch(err => {
            next({ code: 500, message: `${err.message}` })
        })
    }
}


module.exports = movieAuth