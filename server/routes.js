var models = require('../database-mongo/models.js');

const selectAll = (req, res) =>
  models.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      const pageData = {
        data,
        currentUser: req.session.username,
        alertMessage: req.session.alertMessage || '',
        alertStatus: req.session.alertStatus || ''
      }
      res.send(pageData);
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
      if (!data.message) {
        req.session.alertMessage = 'Successfully logged in.';
        req.session.alertStatus = 'success';
      }
      req.session.username = data.username;
      res.send(data);
    }
  });

const loginUser = (req, res) =>
  models.loginUser(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (!data.message) {
        req.session.alertMessage = 'Successfully logged in.';
        req.session.alertStatus = 'success';
      }
      req.session.username = data.username;
      res.send(data);
    }
  });

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.send('Logged out')
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