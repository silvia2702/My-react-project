const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxlegnth: 255,
        minimumlength: 1,

    },
    score: {
        type: Number,
        require: true,
        max: 1000,
        minum: 0,

    },
    entry: {
        type: String,
        require: true,
        maxlength: 1000,
        minumlength: 1,
    },
    src:  {
        type: String,
        require: false,
    },

})

const Movie = new mongoose.model("Movie", movieSchema);

module.exports.Movie = Movie;