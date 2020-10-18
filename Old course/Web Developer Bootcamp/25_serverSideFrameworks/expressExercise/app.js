var express = require("express");
var app = express();

// Routes
app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal/", function (req, res) {
  let animal = req.params.animal.toLowerCase();
  let sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof woof!",
    cat: "meow",
    duck: "quack quack",
  };
  let sound = sounds[animal];
  let speak = "The " + animal + " says " + sound;
  res.send(speak);
});

app.get("/repeat/:str/:num/", function (req, res) {
  let num = req.params.num;
  let str = req.params.str + " ";
  let repeat = "";
  for (let i = 0; i < num; i++) {
    repeat += str;
  }
  res.send(repeat);
});

app.get("/*/", function (req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
});

// Listener
app.listen(3000);
