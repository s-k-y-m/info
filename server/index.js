var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('../db/index.js');

app.use(parser.json());

var port = process.env.port || 3001;

app.use(express.static('./public'));

app.get('/restaurants/info/*', function(req, res) {
  console.log("GET Request on " + req.url);
  var dbId = req.url.slice(18);
  db.findOne(dbId, (err, data) => {
    if (err) {
      res.status(405).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

app.get('/restaurants/all', function(req, res) {
  console.log("GET Request on " + req.url);
  db.getAll((err, data) => {
    if (err) {
      res.status(404).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});


app.listen(port, function() {
  console.log(`Listening on ${port}`);
});