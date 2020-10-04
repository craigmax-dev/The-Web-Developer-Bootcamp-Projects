function average(scores) {
  let sum = scores.reduce((a, b) => a + b, 0);
  // let sum = scores.reduce(function (a, b) {
  //   return a + b;
  // }, 0);

  let avg = sum / scores.length;

  return Math.round(avg);
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
