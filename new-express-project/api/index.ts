const express = require("express");
// get the client
const mysql = require('mysql2');
const app = express();

// create the connection to database
/*const connection = mysql.createConnection({
    host: '3.128.78.212',
    user: 'james',
    password: 'password',
    database: 'project'
  });

app.get("/api/sql", (req, res) => res.send(connection.query(
    'SELECT * FROM `Booking`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
)));
*/
app.get("/", (req, res) => res.send("Express on Vercel"));


app.listen(3005, () => console.log("Server ready on port 3005."));

module.exports = app;