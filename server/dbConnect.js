'use strict'

const Mongoose = require('mongoose')

const uri = process.env.DB_URI || "mongodb://localhost/RLClips"

// Connect to MongoDB
Mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log('MongoDB Error: ', error.message))

// Get the default connection
const db = Mongoose.connection

// Bind connection to error event to recieve a notification of connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"))

exports.Mongoose = Mongoose