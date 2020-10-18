// DOM without jquery

// getElementById
const banner = document.getElementById("banner");
const toc = document.getElementById("toc");

// getElementsByTagName - returns html collection
const allImages = document.getElementsByTagName("img");

for (let img of images) {
  console.log(img.src);
}

// getElementsByClassName
const squareImages = document.getElementsByClassName("square");

// better way of selecting elements - queryselector - pass in same sort of selector as in CSS - select first
document.querySelector("a[title='java']");
document.querySelector("#red");
document.querySelector(".square");

// better way of selecting elements - queryselectorall - pass in same sort of selector as in CSS - select all
document.querySelectorAll("h1");
document.querySelectorAll("#red");
document.querySelectorAll(".square");

// manipulation
// innerText - shows what is currently displaying in the webpage
document.querySelector("p").innerText = "lolol";
// textContent - shows everything in the object
document.querySelector("p").textContent;

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.innerText = "I am a link";
}
// innerHTML - gives entirety of markup contained within element
document.querySelector("h1").innerHTML = "<sup>Superscript</sup>";

// 247 - Attributes
const firstLink = document.querySelector("a");
// Get attributes in different ways - may return different results
firstLink.href;
firstLink.getAttribute("href");
firstLink.href = "http://www.google.com";
firstLink.setAttribute("href", "http://www.google.com");
// manipulating styles - all css terms are camelCase
// .style selector applies styles inline - not recommended
// Instead can define css class using classList
h1.classList.add("border");
h1.classList.remove("border");
h1.classList.toggle("border");
// traversing parent/child/sibling
// .parentElement - navigates to parent. every element has one direct element
// .children - shows all childs of parent element
// .nextElementSibling
// .previousElementSibling
// append and appendChild
const newImage = document.createElement("img");
newImage.src = "http://www.blahblahblah.com";
document.body.appendChild(newImage);
// also can use prepend
// append - add text into something
const par = document.querySelector("p");
par.append("I am new text!!!");
// .insertAdjacentElement

// .removeChild() - old and inconvenient
// better: .remove()
const img = document.querySelector("img");
img.remove();
