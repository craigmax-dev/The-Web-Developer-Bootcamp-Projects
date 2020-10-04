// Only executed our code once the DOM is ready.
paper.install(window);
window.onload = function () {
  // Get a reference to the canvas object
  var canvas = document.getElementById("myCanvas");
  // Create an empty project and a view for the canvas:
  paper.setup("myCanvas");
  // Create a Paper.js Path to draw a line into it:
  var path = new paper.Path();
  // Give the stroke a color
  path.strokeColor = "purple";
  var start = new paper.Point(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  path.lineTo(start.add([200, -50]));
  // Draw the view now:
  paper.view.draw();
};

// // Todo
// // Remove non-visible circles from array
// // Include JS in separate file and get working
// // http://paperjs.org/tutorials/getting-started/using-javascript-directly/

// var circles = [];

// var keyData = {
//   q: {
//     sound: new Howl({
//       src: ["sounds/bubbles.mp3"],
//     }),
//     color: "#1abc9c",
//   },
//   w: {
//     sound: new Howl({
//       src: ["sounds/clay.mp3"],
//     }),
//     color: "#2ecc71",
//   },
//   e: {
//     sound: new Howl({
//       src: ["sounds/confetti.mp3"],
//     }),
//     color: "#3498db",
//   },
//   r: {
//     sound: new Howl({
//       src: ["sounds/corona.mp3"],
//     }),
//     color: "#9b59b6",
//   },
//   t: {
//     sound: new Howl({
//       src: ["sounds/dotted-spiral.mp3"],
//     }),
//     color: "#34495e",
//   },
//   y: {
//     sound: new Howl({
//       src: ["sounds/flash-1.mp3"],
//     }),
//     color: "#16a085",
//   },
//   u: {
//     sound: new Howl({
//       src: ["sounds/flash-2.mp3"],
//     }),
//     color: "#27ae60",
//   },
//   i: {
//     sound: new Howl({
//       src: ["sounds/flash-3.mp3"],
//     }),
//     color: "#2980b9",
//   },
//   o: {
//     sound: new Howl({
//       src: ["sounds/glimmer.mp3"],
//     }),
//     color: "#8e44ad",
//   },
//   p: {
//     sound: new Howl({
//       src: ["sounds/moon.mp3"],
//     }),
//     color: "#2c3e50",
//   },
//   a: {
//     sound: new Howl({
//       src: ["sounds/pinwheel.mp3"],
//     }),
//     color: "#f1c40f",
//   },
//   s: {
//     sound: new Howl({
//       src: ["sounds/piston-1.mp3"],
//     }),
//     color: "#e67e22",
//   },
//   d: {
//     sound: new Howl({
//       src: ["sounds/piston-2.mp3"],
//     }),
//     color: "#e74c3c",
//   },
//   f: {
//     sound: new Howl({
//       src: ["sounds/prism-1.mp3"],
//     }),
//     color: "#95a5a6",
//   },
//   g: {
//     sound: new Howl({
//       src: ["sounds/prism-2.mp3"],
//     }),
//     color: "#f39c12",
//   },
//   h: {
//     sound: new Howl({
//       src: ["sounds/prism-3.mp3"],
//     }),
//     color: "#d35400",
//   },
//   j: {
//     sound: new Howl({
//       src: ["sounds/splits.mp3"],
//     }),
//     color: "#1abc9c",
//   },
//   k: {
//     sound: new Howl({
//       src: ["sounds/squiggle.mp3"],
//     }),
//     color: "#2ecc71",
//   },
//   l: {
//     sound: new Howl({
//       src: ["sounds/strike.mp3"],
//     }),
//     color: "#3498db",
//   },
//   z: {
//     sound: new Howl({
//       src: ["sounds/suspension.mp3"],
//     }),
//     color: "#9b59b6",
//   },
//   x: {
//     sound: new Howl({
//       src: ["sounds/timer.mp3"],
//     }),
//     color: "#34495e",
//   },
//   c: {
//     sound: new Howl({
//       src: ["sounds/ufo.mp3"],
//     }),
//     color: "#16a085",
//   },
//   v: {
//     sound: new Howl({
//       src: ["sounds/veil.mp3"],
//     }),
//     color: "#27ae60",
//   },
//   b: {
//     sound: new Howl({
//       src: ["sounds/wipe.mp3"],
//     }),
//     color: "#2980b9",
//   },
//   n: {
//     sound: new Howl({
//       src: ["sounds/zig-zag.mp3"],
//     }),
//     color: "#8e44ad",
//   },
//   m: {
//     sound: new Howl({
//       src: ["sounds/moon.mp3"],
//     }),
//     color: "#2c3e50",
//   },
// };

// function onKeyDown(event) {
//   if (keyData[event.key]) {
//     // Create circle
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var randomPoint = Point.random();
//     var point = maxPoint * randomPoint;
//     var newCircle = new Path.Circle(point, 500);
//     newCircle.fillColor = keyData[event.key].color;
//     circles.push(newCircle);
//     // Play sound
//     keyData[event.key].sound.play();
//   }
// }

// function onFrame(event) {
//   for (var i = 0; i < circles.length; i++) {
//     circles[i].fillColor.hue += 5;
//     circles[i].scale(0.9);
//     if (circles[i].area < 1) {
//       circles[i].remove(); // remove the circle from the canvas
//       circles.splice(i, 1); // remove the circle from the array
//       console.log(circles);
//     }
//   }
// }
