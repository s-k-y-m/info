var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('../client/setup.js');

app.use(express.static(__dirname + '/'));
app.use(parser.json());

var port = process.env.port || 3001;

app.listen(port, function() {
  console.log(`Listening on ${port}`)
})