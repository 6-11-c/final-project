const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://isaac:123@ds135540.mlab.com:35540/test-db";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log('Connected to mLab');
}, err => {
  console.log(`Error connecting to mLab: ${err}`)
});

module.exports = mongoose.connection;