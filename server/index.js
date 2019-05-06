var express = require('express');
var routes = require('./routes.js');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', (req, res) =>
  routes.selectAll(req, res)
);

app.post('/items', (req, res) =>
  routes.addItem(req, res)
);

module.exports = app;