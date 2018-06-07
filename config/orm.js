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
        })
    },

    insertOne: function() {
        // code here
    },

    updateOne: function() {
        // code here
    },
};

module.exports = orm;