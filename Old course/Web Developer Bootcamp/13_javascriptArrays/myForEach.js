// Custom forEach function

// Method 1
function myForEach(arr, func) {
  // Loop through array
  for (var i = 0; i < arr.length; i++) {
    // Call func for each item
    func(arr[i]);
  }
}

// Method 2
Array.prototype.myForEach = function (func) {
  // Loop through array
  for (var i = 0; i < this.length; i++) {
    // Call func for each item
    func(this[i]);
  }
};
