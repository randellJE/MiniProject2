let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/index"); // index.js

// http://localhost:8000/api/posts Adds a GET route to return all posts
router.get('/', (req, res) => {
    Controllers.postsController.getPosts(res)
})

// http://localhost:8000/api/posts/create Adds a POST route to create a new post
router.post('/create', (req, res) => {
    Controllers.postsController.createPost(req, res);
})

// http://localhost:8000/api/posts/<id> Adds a PUT route to update a post
router.put('/:id', (req, res) => {
    Controllers.postsController.updatePost(req, res);
})

// http://localhost:8000/api/posts/<id> Adds a DELETE route to delete a post
router.delete('/:id', (req, res) => {
    Controllers.postsController.deletePost(req, res);
})




module.exports = router;