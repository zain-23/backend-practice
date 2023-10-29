const express = require("express");
const app = express();

app.use(function (req, res, next) {
  next();
});

app.get("/", function (req, res) {
  res.send("Hello from server");
});
app.get("/profile/:username", function (req, res) {
  res.send(`Hello from profile ${req.params.username}`);
});

app.listen(3000);
