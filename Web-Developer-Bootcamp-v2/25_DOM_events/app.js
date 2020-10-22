const button = document.querySelector("button");
button.addEventListener("click", () => alert("CLICKED!"));

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("#buttons button");
for (let button of buttons) {
  button.addEventListener("click", colorise);
}

// colorise = () => {
//   this.style.backgroundColor = makeRandColor();
// };

function colorise() {
  this.style.backgroundColor = makeRandColor();
}

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => console.log("Keydown"));

// // Passing event to function - two categories: keyboard and mouse events
// window.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("UP");
//       break;
//     case "ArrowDown":
//       console.log("DOWN");
//       break;
//     case "ArrowLeft":
//       console.log("LEFT");
//       break;
//     case "ArrowRight":
//       console.log("RIGHT");
//       break;
//   }
// });

// // Listen to form submission
// const tweetForm = document.querySelector("#tweetForm");
// const tweetsContainer = document.querySelector("#tweets");
// tweetForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent default behaviour when form is submitted
//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addTweet(usernameInput.value, tweetInput.value);
//   usernameInput.value = "";
//   tweetInput.value = "";
// });

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");
//   bTag.append(username);
//   newTweet.append(`${bTag} - ${tweet}`);
//   tweetsContainer.append(newTweet);
// };

// Not working for some reason

// const groceryForm = document.querySelector("form");
// const groceryContainer = document.querySelector("#list");
// groceryForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const product = groceryForm.elements.product;
//   const quantity = groceryForm.elements.qty;
//   addGroceries(product.value, quantity.value);
// });

// const addGroceries = (product, quantity) => {
//   const newGrocery = document.createElement("li");
//   newGrocery.append(`${quantity} ${product}`);
//   groceryContainer.append(newGrocery);
// };

// change events
const input = document.querySelector("section #inputTest");
input.addEventListener("change", (e) => {
  console.log("change");
});

// input event
const h = document.getElementById("h2");
input.addEventListener("input", (e) => {
  console.log("input");
  h.innerText = input.value;
});

// event bubbling
const sec_bubbling = document.querySelector("#event_bubbling");
sec_bubbling.addEventListener("click", (e) => {
  alert("section clicked");
});

const btn_bubbling = document.querySelector("#btn_bubbling");
btn_bubbling.addEventListener("click", (e) => {
  alert("button clicked");
  // stop event bubbling
  e.stopPropagation();
});

// this will not work for lis added in the future
const lis = document.querySelectorAll("#ul_event_delegation li");
for (let li of lis) {
  li.addEventListener("click", () => li.remove);
}

// event delegation - add event listener to a parent
const lisContainer = document.querySelector("#ul_event_delegation");
lisContainer.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove; // remove if li was clicked on
});
