var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dartmods', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = {db, mongoose}