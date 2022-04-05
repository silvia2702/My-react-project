const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const path = require("path");

const movie = require("./routes/movie");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(express.static(path.join(__dirname, "my", "build")));

app.use(movie);

app.listen(port, () => console.log("listening: ", port));