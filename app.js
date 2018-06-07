const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const queries = require("./db/queries");

const app = express();

const glinks = require('./api/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Yo"
  })
})

app.use("/api/v1/glinks", glinks);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  res.status(404);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: req.app.get("env") === "development" ? err.stack : {},
  });
});

module.exports = app;
