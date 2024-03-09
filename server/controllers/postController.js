"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {
    Models.Post.find({})
    .then((data) => res.send({ result: 200, data:data }))
    .catch((err) => {
        res.status(500).send({ result: 500, error: err.message })
    })
}

const createPost = (req, res) => {
    // Creates a new post using JSON data POSTed in request body
    console.log(req.body)
    new Models.Post(req.body).save()
        .then((data) => res.send({result: 200, data: data}))
        .catch((err) => {
            console.log(err);
            res.status(500).send({result: 500, error: err.message})
        })
}

const updatePost = (req, res) => {
    //updates the post matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {new: true })
    .then((data) => res.send({result: 200, data: data}))
    .catch((err) => {
        console.log(err);
        res.status(500).send({result: 500, error: err.message}) // This is what we should do instead of the line below
        // res.send({result: 500, error: err.message})
    })
}

const deletePost = (req, res) => {
    //deletes the post matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
        .then(data => res.status(200).send({ result: 200, data: data}))
        .catch(err => {
            console.log(err)
            res.status(500).send({ result: 500, error: err.message})
        })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost
}