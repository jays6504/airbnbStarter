const express = require("express");
// get the client
const mysql = require('mysql2');
const app = express();

// create the connection to database
const connection = mysql.createConnection({
    host: '3.128.78.212',
    user: 'james',
    password: 'password',
    database: 'project'
  });

app.get("/sql", (req, res) => connection.query(
    'SELECT * FROM `Booking`',
    function(err, results, fields) {
        res.send(results);
    })
);

app.get("/", (req, res) => res.send("Express on Vercel"));


app.listen(3005, () => console.log("Server ready on port 3005."));

module.exports = app;