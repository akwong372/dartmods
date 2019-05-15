var models = require('../database-mongo/models.js');

const selectAll = (req, res) =>
  models.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

const addItem = (req, res) => {
  models.addItem(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
}

const addLike = (req, res) => {
  models.addLike(req.params, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
}

const createUser = (req, res) => {
  models.createUser(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
}

module.exports = { selectAll, addItem, addLike, createUser };