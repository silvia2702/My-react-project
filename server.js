if (!process.env.PASSWORD) console.log("ALERT: NO PASSWORD");

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const path = require("path");

const db = require("./db");

// const movie = require("./routes/movies");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
// app.use("/movies", movie);
app.use(express.static(path.join(__dirname, "my", "build")));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(port, () => console.log("listening: ", port));