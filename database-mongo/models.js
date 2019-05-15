const { db, mongoose } = require('./index.js');

const itemSchema = mongoose.Schema({
  author: String,
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  title: String,
  description: String,
  parts: String,
  tags: { type: Array, index: true },
  main: String
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = (serverRouteFunc) => {
  Item.find({}, (err, items) => {
    if (err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, items);
    }
  });
};

const addItem = (reqData, serverRouteFunc) => {
  let newItem = {};
  if (reqData.date !== undefined) {
    newItem = {
      author: reqData.author,
      date: reqData.date,
      title: reqData.title,
      description: reqData.description,
      parts: reqData.parts,
      tags: reqData.tags,
      main: reqData.main
    };
  } else {
    newItem = {
      author: reqData.author,
      title: reqData.title,
      description: reqData.description,
      parts: reqData.parts,
      tags: reqData.tags,
      main: reqData.main
    };
  }

  Item.create(newItem, (err, data) => {
    if (err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, data);
    };
  });
};

const addLike = (reqData, serverRouteFunc) => {
  Item.findByIdAndUpdate(reqData.postId, {$inc: {likes: 1}}, {new: true}, (err, data) => {
    if (err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, data);
    }
  })
}

module.exports = { selectAll, addItem, addLike };