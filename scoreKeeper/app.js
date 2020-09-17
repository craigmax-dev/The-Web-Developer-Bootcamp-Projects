// Selectors
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
// Scores
var p1Score = 0;
var p2Score = 0;
// State
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
  if (p1Score === winningScore) {
    gameOver = true;
    p1Display.classList.add("winner");
  }
});

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
  if (p2Score === winningScore) {
    gameOver = true;
    p2Display.classList.add("winner");
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

winningScoreInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = winningScoreInput.value;
  winningScore = Number(winningScoreInput.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
