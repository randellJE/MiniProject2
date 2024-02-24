const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    firstName: { type: String, trim: true, required: true},
    lastName: { type: String, trim: true, required: true},
    username: { type: String, trim: true, required: true , maxLength: 15},
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    epicAccount: { type: String },
    steamAccount: { type: String },
    switchAccount: { type: String },
    discordAccount: { type: String },
    twitchAccount: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("user", userSchema)