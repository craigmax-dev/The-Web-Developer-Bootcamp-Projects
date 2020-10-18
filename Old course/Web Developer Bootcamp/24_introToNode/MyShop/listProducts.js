var faker = require("faker");

console.log("-------------------");
console.log("Welcome to my shop!");
console.log("-------------------");

let numProducts = 10;
let product = "";
let price = "";

for (let i = 0; i < numProducts; i++) {
  product = faker.commerce.productName();
  price = faker.commerce.price();
  console.log(product + " - $" + price);
}
