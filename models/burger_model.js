"use strict";

var orm = require("../config/orm");

var burger = {
    displayAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        })
    }
}

module.exports = burger;