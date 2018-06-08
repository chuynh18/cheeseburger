"use strict";

var express = require("express");

var router = express.Router();

var burger = require("../models/burger_model");

router.get("/", function(req, res) {
    burger.displayAll(function(data) {
        // "index" means index.handlebars in the views directory
        // {burgers: data} means it'll pass "data" (which came from MySQL and passed through several layers) as "burgers" to handlebars
        res.render("index", {burgers: data});
    });
});

// expects x-www-form-urlencoded {burgerName: 'name of burger here'} and sends back id (in database)
router.post("/api/burgers", function(req, res) {
    burger.insertBurger(req.body.burgerName, response => {
        console.log(response.insertId);
        res.json(response.insertId);
    });
});

module.exports = router;