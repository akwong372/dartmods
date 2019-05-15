const express = require('express');
const { db } = require('../database-mongo/index.js');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes.js');
const bodyParser = require('body-parser');

const app = express();
app.use(session({
  secret: 'somekindofsecret',
  // genid: req => genuuid(),
  store: new MongoStore({ mongooseConnection: db }),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', (req, res) =>
  routes.selectAll(req, res)
);

app.post('/items', (req, res) =>
  routes.addItem(req, res)
);

app.post('/items/:postId/like', (req, res) =>
  routes.addLike(req, res)
);

app.post('/users/newuser', (req, res) =>
  routes.createUser(req, res)
);

app.post('/users/login', (req, res) =>
  routes.loginUser(req, res)
);

module.exports = app;