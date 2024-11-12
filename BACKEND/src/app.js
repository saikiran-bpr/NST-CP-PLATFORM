const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(
    cors({
        origin : process.env.CORS_ORIGIN,
        credentials : true
    })
)
app.use(express.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      success: false,
      message: message,
    });
});

module.exports = app;