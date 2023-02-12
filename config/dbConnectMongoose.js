const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to the database");
  } catch (e) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
