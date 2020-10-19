const button = document.querySelector("button");
button.addEventListener("click", () => alert("CLICKED!"));

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
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

// Passing event to function - two categories: keyboard and mouse events
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP");
      break;
    case "ArrowDown":
      console.log("DOWN");
      break;
    case "ArrowLeft":
      console.log("LEFT");
      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
  }
});
