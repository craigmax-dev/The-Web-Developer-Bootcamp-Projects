var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Paula", "Piblo", "Marcos", "Carla", "Irene", "Silvia"];

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/addFriend", function (req, res) {
  var newFriend = req.body.name;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
});

app.listen(3000, function () {
  console.log("Server started!");
});
