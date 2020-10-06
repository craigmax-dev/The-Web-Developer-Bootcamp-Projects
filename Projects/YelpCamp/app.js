// Using REST API convention

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const campgrounds = [
  {
    name: "Salmon Creek",
    image:
      "https://assets.bedful.com/images/5485754cbde26c8f713580fa45908554994075be/large/campsites-in-scotland/campsites-in-scotland.jpg",
  },
  {
    name: "Fairy Pools",
    image:
      "https://www.visitscotland.com/cms-images/holidays/wild-camping-fairy-pools?view=Standard",
  },
  {
    name: "Goat's Rest",
    image:
      "https://assets.bedful.com/images/bfd67d9f7e98da340ca040ea3414623b97e42b73/large.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});

app.listen(3000, () => {
  console.log("YelpCamp server has started");
});
