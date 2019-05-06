const {db, mongoose} = require('./index.js');

const itemSchema = mongoose.Schema({
  title: String,
  description: String,
  parts: String,
  tags: Array,
  main: String
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = (serverRouteFunc) => {
  Item.find({}, (err, items) => {
    if(err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, items);
    }
  });
};

const addItem = (reqData, serverRouteFunc) => {
  const newItem = {
    title: reqData.title,
    description: reqData.description,
    parts: reqData.parts,
    tags: reqData.tags,
    main: reqData.main
  }
  Item.create(newItem, (err, data) => {
    if (err) {
      serverRouteFunc(err, null);
    } else {
      serverRouteFunc(null, data);
    }
  })
}

module.exports = {selectAll, addItem};