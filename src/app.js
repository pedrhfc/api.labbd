require("./app/services/mongoose");

const express = require("express");

const routes = require("./app/routes/routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/crud", cors(), routes);

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});

module.exports = app;
