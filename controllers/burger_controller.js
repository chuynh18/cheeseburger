"use strict";

var express = require("express");

var router = express.Router();

var burger = require("../models/burger_model");

router.get("/", function(req, res) {
    burger.displayAll(function(data) {
        res.render("index", {burgers: data});
    })
})

module.exports = router;