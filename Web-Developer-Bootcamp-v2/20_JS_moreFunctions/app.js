// Higher order functions
function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

// Returning functions
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// Defining methods - methods are functions that have been placed as a property on an object
const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num ** 2;
  },
  cube: function (num) {
    return num ** 3;
  },
};

// Alternative notation
const myMath2 = {
  square(num) {
    return num ** 2;
  },
  cube(num) {
    return num ** 3;
  },
};

myMath.square(5);
myMath.cube(10);

// "this" keyword
const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "Scottish Fold",
  meow() {
    console.log(`${this.name} says MEOWWW`);
  },
};

// Different invocation context - this refers to different object
const meow2 = cat.meow;

// Using try/catch - use to catch potential anticipated errors
try {
  hello.toUpperCase();
} catch {
  console.log("ERROR!");
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (err) {
    console.log(err);
  }
}
