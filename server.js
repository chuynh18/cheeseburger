"use strict";

// ========================= EXPRESS.js dependencies ==========================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// ============================= EXPRESS.js setup =============================

// set up Express.js
var app = express();
var PORT = process.env.PORT || 8080; // so that I can deploy to Heroku or test locally on port 8080

// set up Express.js to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up Express.js to use express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =================================== ROUTES ==================================

var routes = require("./controllers/burger_controller");
app.use(routes);

// ============================= EXPRESS.js LISTEN =============================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});