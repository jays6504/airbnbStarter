const express = require("express");
// get the client
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
var query = "SELECT * FROM project.users";

/*app.options('*', cors())*/

app.use(cors());
/*
var corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/


// create the connection to database
const connection = mysql.createConnection({
    host: '3.128.78.212',
    user: 'james',
    password: 'password',
    database: 'project'
  });

app.get("/sql", function (req, res) 
{
    console.log(req.query)
    query = decodeURI(req.query);
    console.log(query);
     connection.query(
        query,
        function(err, results, fields) {
            res.send(results);
        })
});

app.get("/", (req, res) => res.send({E:"Express on Vercel"}));


app.listen(3005, () => console.log("Server ready on port 3005."));

module.exports = app;