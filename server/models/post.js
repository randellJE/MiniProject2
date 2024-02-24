const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = mongoose.Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, maxLength: 255},
    username: { type: String, trim: true, required: true , maxLength: 15 },
    imageURL: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("post", postSchema)