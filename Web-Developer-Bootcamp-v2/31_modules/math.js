const add = (x, y) => x + y;
const PI = 3.13159;

// module.exports is an object that we add properties/methods on to
module.exports.add = add;
module.exports.PI = PI;

// alternatively
module.exports.add = (x, y) => x + y;

// alternative shortcut syntax
exports.square = square;
