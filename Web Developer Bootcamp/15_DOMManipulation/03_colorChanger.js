var isPurple = false;
// Select DOM Elements
var butt = document.querySelector("button");
// Toggle colour - version 1
// butt.addEventListener("click", function () {
//   if (isPurple) {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "purple";
//   }
// });
// Toggle colour - version 2
butt.addEventListener("click", function () {
  document.body.classList.toggle("purple");
});
