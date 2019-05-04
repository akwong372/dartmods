var {db, mongoose} = require('./index.js');

var itemSchema = mongoose.Schema({
  title: String,
  description: String,
  parts: String,
  tags: Array,
  main: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;