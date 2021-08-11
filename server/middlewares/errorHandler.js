function errorHandler(err, req, res, next) {
    let name = err.name
    let code = err.code || 500
    let validation = err.validation
    let message;
    let error;
    let errorMsg = []

    if (name == 'SequelizeUniqueConstraintError' || name == 'SequelizeValidationError') {
        if (name == 'SequelizeUniqueConstraintError') {
            code = 400
            error = 'Input Error'
            errorMsg.push("Email is already taken. Please use another email")
            message = errorMsg
        } else if (name == 'SequelizeValidationError') {
            code = 400
            error = 'Input Error'
            for (let i = 0; i < validation.length; i++) {
                errorMsg.push(validation[i].message)                   
            }
            message = errorMsg || "Validation/Constraint Error"  
        }
    } else {
        if (code == 400) {
            error = "Bad Request"
            message = err.message || "Invalid Input/Bad Request"
        }
        if (code == 401) {
            error = 'Unauthorized'
            message = err.message || "Error login / authentication"
        }
        if (code == 403) {
            error = 'Forbidden'
            message = err.message || "Forbidden Access"
        }
        if (code == 500) {
            error = 'Internal Server Error'
            message = err.message || "Internal Server Error"
        }
    }

    //send error

    // console.log(err, message)
    res.status(code).json({ error, message })
}

module.exports = errorHandler