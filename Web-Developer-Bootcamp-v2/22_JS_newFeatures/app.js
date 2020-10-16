// Default params - define default parameters for variables in function

// Roll die - default number of 6 sides
const rollDie = (numSides = 6) => Math.floor(Math.random() * numSides + 1);

// Default parameters should always come last
function greet(person, msg = "Hello there") {
  console.log(`${msg}, ${person}!`);
}

// Spread - expand iterable

// into function call
const nums = [1, 4, 5, 3, 5, 3, 45, 436, 657];
Math.max(nums);
// Using spread
Math.max(...nums);

// allow iterable to be expanded
const cats = ["blue", "scout", "rocket"];
const dogs = ["rusty", "wyatt"];
const allPets = [...dogs, ...cats];

// rest - collect rest of parameters
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

// Destructuring arrays
const scores = [10, 9, 8, 7, 6];
const [gold, silver, bronze, ...everyoneElse] = scores;

// Destructuring objects
const user = {
  email: "harvey@gmail.com",
  password: "scottSm1th",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
};
const {
  email,
  firstName,
  lastName,
  born: birthYear,
  died: deathYear = "N/A",
  bio = "N/A",
} = user;

// Destructuring params
const fullName = (user) => {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
};

// Shorter example - destructuring in function arguments
const fullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
