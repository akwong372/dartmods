const app = require('./index.js');

const port = process.env.PORT || 3000;


app.listen(3000, function () {
  console.log(`listening on port ${port}!`);
});