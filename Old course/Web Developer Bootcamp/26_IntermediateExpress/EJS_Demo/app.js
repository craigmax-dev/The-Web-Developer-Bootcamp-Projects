var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.render("love", { thing: thing });
});

app.get("/posts", function (req, res) {
  var posts = [
    { title: "post 1", author: "Suzy" },
    { title: "mu pet bunny", author: "Charlie" },
    { title: "can you believe this pomsky", author: "Craig" },
  ];
  res.render("posts", { posts: posts });
});

app.listen(3000, function () {
  console.log("Server is listening!");
});
