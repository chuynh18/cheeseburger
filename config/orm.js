"use strict";

var connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table, burgerName, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${burgerName}")`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function() {
        // code here
    },
};

module.exports = orm;