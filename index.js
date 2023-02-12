const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnectMongoose");
const { notFound, errorHandler } = require("./middlewares/errorHandle");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRouter = require("./routes/userAth");

dbConnect();

// app.use("/", (req, res) => {
//   res.send(`Welcome everybody !`);
// });

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at Port: ${PORT}`);
});
