const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach method - for ... on usually better now
numbers.forEach((el) => {
  console.log(el);
});

// map method - creates a new array with results of calling a callback on every element in array
const texts = ["rofl", "lol", "omg"];
const caps = texts.map((text) => {
  return text.toUpperCase();
});

// arrow functions
const add = (x, y) => {
  return x + y;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// arrow function implicit returns - only works with arrow functions - only work if there is one expression in function
const rollDie = () => Math.floor(Math.random() * 6) + 1;
const add = (a, b) => a + b;

movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

// setTimeout - will run code after a delay. other code will be executed before
setTimeout(() => {
  console.log("HELLO!");
}, 3000);

// setInterval - run code at frequent interval
const id = setInterval(() => {
  console.log(Math.random);
}, 2000);

// to stop interval
clearInterval(id);

// filter - creates new array with all elements that pass the test implemented by the provided function
const odds = numbers.filter((n) => n % 2 === 0);

const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

const exams = [60, 70, 65, 87, 98, 76];

// every - boolean check if every array element passes conditional function
exams.every((score) => score > 70);
// some - boolean check if any array element pass conditional function
exams.some((score) => score > 95);

// reduce method - executes a reducer function on each element of array, resulting in a single value

// Summing an array
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// Sum prices
const prices = [9.99, 4.99, 1.5];
const total = prices.reduce((accumulator, price) => accumulator + price);

// Minimum in array
const min = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  } else {
    return min;
  }
});

// movies
movies.reduce((bestMovie, movie) => {
  if (movie.score > bestMovie.score) {
    return movie;
  } else {
    return bestMovie;
  }
});

// Second argument for reduce acts as initial value for accumulator
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => num + num, 100);

// settimeout function will not work as it is a method on the window!
// Instead, declare functions with arrow method
// Generally better to use arrow functions for methods
const person = {
  firstName: "Viggo",
  lastName = "Mortenson",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function() {
    setTimeout(() => console.log(this.fullName), 3000)
  }
};

// Arrow functions and 'this'
const person = {
  firstName: "Viggo",
  lastName = "Mortenson",
  fullName: () => `${this.firstName} ${this.lastName}`,
  shoutName: () => {
    setTimeout(() => console.log(this.fullName), 3000)
  }
};