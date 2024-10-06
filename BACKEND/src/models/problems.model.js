const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    question : {
        type : String,
        required: true,
        unique: true
    },
    description : {
        type : String,
        required : true,
    },
    input : {
        type : String,
        required: true,
    },
    output : {
        type : String,
        required: true,
    },
    constraints : {
        type : String,
        required: true,
    },
    sample_input_1 : {
        type : String,
        required: true,
    },
    sample_output_1 : {
        type : String,
        required: true,
    },
    sample_input_2 : {
        type : String,
    },
    sample_output_2 : {
        type : String,
    }
});
const Problem = mongoose.model("Problem", schema)
module.exports = Problem;