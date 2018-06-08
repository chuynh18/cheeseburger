"use strict";

var orm = require("../config/orm");

var burger = {
    displayAll: callback => {
        orm.selectAll("burgers", response => {
            callback(response);
        })
    },
    insertBurger: (burgerName, callback) => {
        orm.insertOne("burgers", burgerName, response => {
            callback(response);
        });
    },
    eatBurger: (idNum, callback) => {
        orm.updateOne("burgers", idNum, response => {
            callback(response);
        });
    },
    digestBurger: (idNum, callback) => {
        orm.deleteOne("burgers", idNum, response => {
            callback(response);
        });
    }
};

module.exports = burger;