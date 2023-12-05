const express = require("express");
const jsRouter = require("./routes/jsRouter");
const htmlRouter = require("./routes/htmlRouter");
const cssRouter = require("./routes/cssRouter");
const accessRouter = require("./routes/accessRouter");
app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Update with your frontend origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.route;
app.use("/quizzes", jsRouter);
app.use("/quizzes", htmlRouter);
app.use("/quizzes", cssRouter);
app.use("/quizzes", accessRouter);
module.exports = app;
