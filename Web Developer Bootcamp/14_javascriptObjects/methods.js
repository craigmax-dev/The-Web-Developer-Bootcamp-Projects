// Create object with method .add
var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  add: function (x, y) {
    return x + y;
  },
};

obj.add(5, 10);

// Why?
// - Keeps code organised
// - Namespace collisions - same function that should operate differently in different scenarios

// this keyword
var comments = {};
comments.data = ["Good job!", "Bye", "Lame..."];
comments.print = function () {
  // "this" refers to the object "comments"
  this.data.forEach(function (el) {
    console.log(el);
  });
};

comments.print;
