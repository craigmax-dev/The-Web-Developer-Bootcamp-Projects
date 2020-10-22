// call stack demo

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

// callback hell
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

// nested callbacks
delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, ());
    });
  });
});


// functions often have multiple callbacks
searchMoviesAPI("amadeus", () => {
  saveToMyDB(movies, () => {
  // if it works run this
  }, () => {
  // if it doesn't work run this
  })
}, () => {
  // if API is down or request failed
})