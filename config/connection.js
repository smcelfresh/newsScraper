//db username/password 
require('dotenv').config();
// require mongoose
var mongoose = require('mongoose');

// Require bluebird as promise because mongoose promises are deprecated; this was in 8.3
var Promise = require('bluebird');
mongoose.Promise = Promise;

// make the connection
mongoose.connect("mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}");
var db = mongoose.connection;

// check for error
db.on("error", function (error) {
    console.log("database error: ", err);
});

// confirm connection
db.once("open", function () {
    console.log("Mongoose connected");
});

// export the database
module.exports = db;