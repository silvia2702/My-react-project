const express = require('express');
const router = express.Router();
const { Movie } = require("../model/Movie");

router.post('/', (req, res) => {
    if(req.headers.x_psw === process.env.PASSWORD) {
        const movie = Movie({
            title: req.body.title,
            score: req.body.score,
            entry: req.body.entry,
            src: req.body.src,
    
        })
    
        movie.save()
        .then(()=> res.send(movie))
        .catch((err)=> res.send(err))

    }
    else res.send("ACCESS DENIED").sendStatus(410)


})
router.get('/', (req, res) => {
    Movie.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
})


// app.get("/posts", async (req, res) => {
//     const postDir = "./public/posts"
//     if(!fs.existsSync("./public/posts")) fs.mkdirSync(postDir);

//     const postsNames = fs.readdirSync(postDir);
//     const posts = [];
//     postsNames.forEach(postName => {
//         posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
//     })

//     res.send(posts);
// })

// app.post('/' , (req,res) => {
//     if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR)

//     fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))
//     // console.log(fs.existsSync("./my/public/posts"))
//     // console.log(req.body)
//     // console.log("I received a request")
//     res.send("hey I responded")
// })

module.exports = router;