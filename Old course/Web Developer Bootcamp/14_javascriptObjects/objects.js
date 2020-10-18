var person = {
  name: "Travis",
  age: 21;
  city: "LA"
}

// Bracket notation - can use using variable
console.log(person["name"]);
// Dot notation
console.log(person.name);

// Changing data
person.age += 1;
person.city = "London";

// Blog post data structure example
var posts = [
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome post", "Terrible post"]
  },
  {
    title: "Cats are actually awesome",
    author: "Cats Luvr",
    comments: ["<3", "Go to hell"]
  }
]