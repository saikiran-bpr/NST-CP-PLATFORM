const { connect } = require("mongoose");
const app = require("./app");
const dotnev = require("dotenv");
const connectDB = require("./db");
dotnev.config();



connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
});

