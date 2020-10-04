// Create secret number
var secretNumber = 7;
// ask user for guess
var guess = Number(prompt("Guess a number"));

// Check guess
if(guess === secretNumber){
  alert("You got it right!")
}
else if(guess > secretNumber) {
  alert("Too high. Guess again!");
}
else {
  alert("Too low. Guess again!");
}