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
