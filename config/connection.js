"use strict";

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "8U#mDA345vUk5W6vtjVCSMStLUWHmD!u",
    database: "burgers_db"
    });
}
  
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;