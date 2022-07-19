

const express = require('express');
const mongoose = require("mongoose");

const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use("/api/users", userRoute);
app.use("/api/auth", userRoute);



mongoose.connect(
    precess.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=> {}
)
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});