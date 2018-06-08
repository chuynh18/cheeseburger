"use strict";

var connection = require("./connection");

var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    insertOne: (table, burgerName, cb) => {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${burgerName}")`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: (table, idNum, cb) => {
        var queryString = `UPDATE ${table} SET devoured = true WHERE id = ${idNum}`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: (table, idNum, cb) => {
        var queryString = `DELETE FROM ${table} WHERE id = ${idNum}`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;