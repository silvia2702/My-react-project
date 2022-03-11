const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require("fs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/' , (req,res) => {
    const POST_DIR = "./my/public/posts"
    if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR)

    fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))
    // console.log(fs.existsSync("./my/public/posts"))
    // console.log(req.body)
    // console.log("I received a request")
    res.send("hey I responded")
})

app.listen(port, () => console.log("listening: ", port));