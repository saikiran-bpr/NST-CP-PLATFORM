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

app.use("/", routes);

module.exports = app;