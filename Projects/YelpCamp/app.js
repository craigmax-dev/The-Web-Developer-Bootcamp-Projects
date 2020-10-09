// Using REST API convention
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Craig_Maxwell:D8qzD3vSrqFCcbh@yelpcamp.rdb1b.mongodb.net/YelpCamp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});
const Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//   {
//     name: "Fairy Pools",
//     image:
//       "https://www.visitscotland.com/cms-images/holidays/wild-camping-fairy-pools?view=Standard",
//     description:
//       "This campground is near the fairy pools in Skye, a collection of beautifully crystal clear blue pools on the River Brittle",
//   },
//   (err, campground) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(campground);
//     }
//   }
// );

// const campgrounds = [
//   {
//     name: "Salmon Creek",
//     image:
//       "https://assets.bedful.com/images/5485754cbde26c8f713580fa45908554994075be/large/campsites-in-scotland/campsites-in-scotland.jpg",
//   },
//   {
//     name: "Fairy Pools",
//     image:
//       "https://www.visitscotland.com/cms-images/holidays/wild-camping-fairy-pools?view=Standard",
//   },
//   {
//     name: "Goat's Rest",
//     image:
//       "https://assets.bedful.com/images/bfd67d9f7e98da340ca040ea3414623b97e42b73/large.jpg",
//   },
// ];

app.get("/", (req, res) => {
  res.render("landing");
});

// INDEX
app.get("/campgrounds", (req, res) => {
  // Retrieve campgrounds from db
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds: allCampgrounds });
    }
  });
});

// CREATE
app.post("/campgrounds", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const newCampground = { name: name, image: image, description: description };
  // Create new campground and save to db
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

// NEW
app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

// SHOW
app.get("/campgrounds/:id", (req, res) => {
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      res.render("show", { campground: foundCampground });
    }
  });
});

app.listen(3000, () => {
  console.log("YelpCamp server has started");
});
