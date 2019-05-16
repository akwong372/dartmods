var models = require('../database-mongo/models.js');

const selectAll = (req, res) =>
  models.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

const addItem = (req, res) =>
  models.addItem(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });

const addLike = (req, res) => {
  models.addLike(req.params, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
}


const createUser = (req, res) =>
  models.createUser(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });

const loginUser = (req, res) =>
  models.loginUser(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      req.session.username = data.username;
      console.log(req.session)
      res.send(data);
    }
  });

const logoutUser = (req, res) => {
  console.log(req.session)

  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    console.log(req.session)

    res.redirect('/');
  });
}

module.exports = {
  selectAll,
  addItem,
  addLike,
  createUser,
  loginUser,
  logoutUser
};