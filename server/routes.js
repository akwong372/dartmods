var items = require('../database-mongo/models.js');

const selectAll = (req, res) =>
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

const addItem = (req, res) => {
  items.addItem(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
}

module.exports = {selectAll, addItem};