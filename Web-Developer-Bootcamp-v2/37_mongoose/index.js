const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Craig_Maxwell:D8qzD3vSrqFCcbh@yelpcamp.rdb1b.mongodb.net/MoviesDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection open!");
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
