class AppError {
    message;
    statusCode;

    constructor(messageIn, statusCodeIn = 400){
        this.message = messageIn;
        this.statusCode = statusCodeIn;
    }
}

module.exports = AppError;