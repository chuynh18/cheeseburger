"use strict";

var orm = require("../config/orm");

var burger = {
    displayAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        })
    },
    insertBurger: function(burgerName, callback) {
        orm.insertOne("burgers", burgerName, function(response) {
            callback(response);
        });
    }
}

module.exports = burger;