class AppError  { //padronizar a frase de error
    message;
    statusCode

    constructor(message, statusCode=400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;