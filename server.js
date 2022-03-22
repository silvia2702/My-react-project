const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require("fs")
const path = require("path");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const POST_DIR = "./my/public/posts"

// app.use(express.static(path.join(__dirname, "/public")))

app.get("/posts", async (req, res) => {
    const postDir = "./public/posts"
    if(!fs.existsSync("./public/posts")) fs.mkdirSync(postDir)

    const postsNames = fs.readdirSync(postDir);
    const posts = [];

    postsNames.forEach(postName => {
        posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
    })
    
    console.log(postsNames);

    res.send(posts);
})

app.post('/' , (req,res) => {
    if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR)

    fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))
    // console.log(fs.existsSync("./my/public/posts"))
    // console.log(req.body)
    // console.log("I received a request")
    res.send("hey I responded")
})

app.listen(port, () => console.log("listening: ", port));