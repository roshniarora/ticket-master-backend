const mongoose = require("mongoose");

const configureDB = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      process.env.MONGODB_URI ||
        "mongodb://localhost:27017/ticket-master-backend",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log("Error in connection :", err);
    });
};

module.exports = configureDB;
