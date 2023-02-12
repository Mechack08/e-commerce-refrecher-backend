const express = require("express");
const dbConnect = require("./config/dbConnectMongoose");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use("/", (req, res) => {
  res.send(`Welcome everybody !`);
});

app.listen(PORT, () => {
  console.log(`Server listening at Port: ${PORT}`);
});
