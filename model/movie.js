const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    score: Number,
    entry: String,
    src: String,
    key: Number, 

})