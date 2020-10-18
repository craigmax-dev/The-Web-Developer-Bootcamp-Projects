function factorial(num) {

  var fac = 1;

  for(var i = 1; i <= num; i++) {
    fac = fac*i;
  }

  return fac;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
