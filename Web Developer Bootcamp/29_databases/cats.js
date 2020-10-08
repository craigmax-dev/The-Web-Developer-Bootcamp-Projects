var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Craig_Maxwell:D8qzD3vSrqFCcbh@yelpcamp.rdb1b.mongodb.net/cat_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

// // Add new cat to DB
// var george = new Cat({
//   name: "Mrs Norris",
//   age: 7,
//   temperament: "Evil",
// });
// george.save((err, cat) => {
//   if (err) {
//     console.log("Not uploaded");
//     console.log(err);
//   } else {
//     console.log("Cat added to database");
//     console.log(cat);
//   }
// });

// New and save all at once
Cat.create(
  {
    name: "Snow White",
    age: 15,
    temperament: "Bland",
  },
  (err, cat) => {
    if (err) {
      console.log(err);
    } else {
      console.log(cat);
    }
  }
);

// Retreive all cats from DB
Cat.find({}, (err, cats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(cats);
  }
});
