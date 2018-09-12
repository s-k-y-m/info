var express = require('express');
var app = express();
var parser = require('body-parser');
// var db = require('../db/index.js');
var db = require('../setup.js');


app.use(parser.json());

var port = process.env.port || 3001;

app.use(express.static('../public'));
app.get('/restaurants/info', function(req, res) {
  console.log("GET Request on /restaurants/");
  res.status(200).send(db.databaseData)
});
// res.send("hi")
// });

app.listen(port, function() {
  console.log(`Listening on ${port}`);
});