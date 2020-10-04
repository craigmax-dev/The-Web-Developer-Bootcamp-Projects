// Arrays
var array_1 = [1, 2, 3, 4];
var array_2 = ["a", "b", "c"];
var array_3 = [1, 1, 1, 1];
var array_4 = [1, 6, 17, 3];
var array_5 = [-7, -9, -5, -6];

// Call functions
printReverse(array_1);
printReverse(array_2);

isUniform(array_2);
isUniform(array_3);

sumArray(array_1);
sumArray(array_4);
sumArray(array_5);

max(array_3);
max(array_1);
max(array_5);

// printReverse - print array in reverse order
function printReverse(a){
  for(var i = a.length - 1; i >= 0; i--){
    console.log(a[i]);
  }
}

// isUniform() - check if all elements in array are identical
function isUniform(a){
  var first = a[0];
  for(var i = 1; i < a.length; i++){
    if(a[i] !== first){
      return false;
    }
  }
  return false;
}

// Original solution for isUniform()
// var identical = true;
// a.forEach(function(val){
//   if (a[0] !== val){
//     identical = false;
//   }
// });
// if(identical === true){
//   console.log("Array is uniform!");
// }
// else{
//   console.log("Array is not uniform!");
// }

// sumArray() - sum array of numbers
function sumArray(a){
  var total = 0;
  a.forEach(function(val){
    total += val;
  });
  return total;
}

// max() - find maximum in array of numbers
function max(a){
  var m = a[0];
  for(var i = 1; i < a.length; i++){
    if(a[i] > m){
      m = a[i];
    }
  }
  return m;
}

// Original solution for max()
// a.forEach(function(val, i){
//   if(i === 0){
//    m = val;
//   }
//   else if (val > m) {
//    m = val;
//   }
// });
// return m;