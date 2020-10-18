if(age < 0){
  console.log("Your age is negative.");
}
else if(age < 18){
  console.log("Sorry, you are not old enough to enter the venue");
}
else if(age < 21){
  console.log("You can enter, but cannot drink");
}
else {
  console.log("Come on in, you can drink.");
}

if(age === 21){
  console.log("Happy 21st birthday!");
}

if(age%2 === 1){
  console.log("Your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}