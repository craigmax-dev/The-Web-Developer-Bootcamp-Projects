// Non-selector variables
var numSquares = 6;
var colors = [];
var goalColor;
// Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function () {
  reset();
});

function init() {
  // Set up mode buttons
  setUpModeButtons();
  // Set up squares
  setUpSquares();
  // Reset game
  reset();
}

function reset() {
  // Generate new colors
  colors = generateRandomColors(numSquares);
  // Pick new random color
  goalColor = pickColor();
  // Change colors display
  colorDisplay.textContent = goalColor;
  resetButton.textContent = "New Colors";
  // Change text display
  messageDisplay.textContent = "";
  // Change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    // Mode buttons event listeners
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // Add click listeners
    squares[i].addEventListener("click", function () {
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare to goalColor
      if (clickedColor === goalColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColors(color) {
  // Loop through squares
  for (var i = 0; i < squares.length; i++) {
    // Change square color
    squares[i].style.backgroundColor = color;
  }
}

function generateRandomColors(num) {
  // Make array
  var arr = [];
  // Add num random colors
  for (var i = 0; i < num; i++) {
    // Get random color
    arr.push(randomColor());
  }
  // Return array
  return arr;
}

function randomColor() {
  // red
  var r = Math.floor(Math.random() * 256);
  // green
  var g = Math.floor(Math.random() * 256);
  // blue
  var b = Math.floor(Math.random() * 256);
  // String
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
