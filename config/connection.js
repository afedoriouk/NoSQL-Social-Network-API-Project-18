// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Posts', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.set('debug', true);

// module.exports = mongoose.connection;



const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => {console.log("Connected to MongoDB")});

module.exports = mongoose.connection; 