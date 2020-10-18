var bodyParser = require("body-parser"),
  express = require("express"),
  mongoose = require("mongoose"),
  app = express();

// App config
mongoose.connect(
  "mongodb+srv://Craig_Maxwell:D8qzD3vSrqFCcbh@yelpcamp.rdb1b.mongodb.net/restful_blog_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test blog",
//   image:
//     "https://cdn.goliath.com/eyJidWNrZXQiOiJwdWItc3RvcmFnZSIsImtleSI6ImdvbGlhdGgvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvTGVvR2F0c2J5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODk1LCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIiLCJiYWNrZ3JvdW5kIjp7InIiOjAsImciOjAsImIiOjAsImFscGhhIjoxfX19fQ==",
//   body: "This is a blog post",
// });

// Restful routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find({}, (req, res) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { blogs: blogs });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening");
});
