const { db, mongoose } = require('./index.js');

const itemSchema = mongoose.Schema({
  author: String,
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
  const newItem = {
    author: reqData.author,
    title: reqData.title,
    description: reqData.description,
    parts: reqData.parts,
    tags: reqData.tags,
    main: reqData.main
  };

  Item.create(newItem, (err, data) => {
    if (err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, data);
    };
  });
};

module.exports = { selectAll, addItem };