const express = require("express");
// get the client
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
var query = 'SELECT * FROM `Booking`';
var results = null;
/*app.options('*', cors())*/

app.use(cors());
/*
var corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/


// create the connection to database
const connection = mysql.createConnection({
    host: '18.191.254.206',
    user: 'james',
    password: 'password',
    database: 'project'
  });

app.get("/sql", function (req, res) 
{
    var decoded = decodeURI(req.query.data);
    console.log(decoded);
     connection.query(
        decoded,
        function(err, results, fields) {
            console.log(results);
            //onsole.log(fields); // results contains rows returned by server
            res.send(results);
            //console.log(res);
        })
});

app.get("/sql2", function (req, res) 
{
    var decoded = req.body;
    console.log(decoded);
     connection.query(
        decoded,
        function(err, results, fields) {
            console.log(results);
            console.log(fields); // results contains rows returned by server
            res.send(results);
            console.log(res);
        })
});

app.get("/", (req, res) => res.send({E:"Express on Vercel"}));


app.listen(3005, () => console.log("Server ready on port 3005."));

module.exports = app;