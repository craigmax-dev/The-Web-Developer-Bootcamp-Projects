var express = require("express");
var app = express();

// ------
// Routes
// ------
app.get("/", function (req, res) {
  res.send("Hi there!");
});

app.get("/bye", function (req, res) {
  res.send("Goodbye!");
});

app.get("/dog", function (req, res) {
  res.send("Woof!");
});

app.get("*", function (req, res) {
  res.send("You are a star!");
});

app.listen(3000, function () {
  console.log("Server has started!");
});
