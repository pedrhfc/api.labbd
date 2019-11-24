const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/crud";
const options = {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(uri, options);

mongoose.connection.on("connected", () => {
  console.log("Connection established");
});

mongoose.connection.on("error", err => {
  console.log("Connection error:" + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
});

module.exports = mongoose;
