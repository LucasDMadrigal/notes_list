const express = require("express");
const path = require("path");

//initializaions
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname + "views"));

//Midleware
app.use(express.urlencoded({ extended: false }));
// Global Variables

// routes
app.get('/', (req, res) => {
    res.send("Holis");
})

// Static files
app.set("views", path.join(__dirname + "public"));

module.exports = app;
