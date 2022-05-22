require("express-async-errors");
const migratrionsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError")

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json())

app.use(routes);

migratrionsRun();

app.use((error, req, res, next) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return res.status(500).json({
        status: "error",
        message: "internal server error"
    });
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))