"use strict";

var express = require("express");

var router = express.Router();

var burger = require("../models/burger_model");

// display all burgers
router.get("/", (req, res) => {
    burger.displayAll(function(data) {
        // "index" means index.handlebars in the views directory
        // {burgers: data} means it'll pass "data" (which came from MySQL and passed through several layers) as "burgers" to handlebars
        res.render("index", {burgers: data});
    });
});

// create a burger
// expects x-www-form-urlencoded {burgerName: nameOfBurger} and sends back id (in database)
router.post("/api/burgers", (req, res) => {
    burger.insertBurger(req.body.burgerName, response => {
        console.log(req.body);
        res.json(response.insertId);
    });
});

// eat a burger
router.put("/api/burgers/:id", (req, res) => {
    burger.eatBurger(req.params.id, response => {
        console.log(response.changedRows);
        if (response.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// digest a burger
router.delete("/api/burgers/:id", (req, res) => {
    burger.digestBurger(req.params.id, response => {
        console.log(response.affectedRows);
        // have to use affectedRows because this is a delete
        if (response.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;