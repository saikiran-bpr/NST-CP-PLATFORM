const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");


const connectDB = async () => {
    try {
        const instance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Mongo db connected sucessfully");
    } catch(e){
        console.log("Mongo db connection error");
    }
}

module.exports = connectDB;