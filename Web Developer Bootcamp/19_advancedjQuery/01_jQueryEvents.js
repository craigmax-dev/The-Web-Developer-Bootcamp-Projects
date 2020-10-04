// Click Method
$("h1").click(function () {
  alert("h1 clicked");
});

$("button").click(function () {
  $(this).css({ background: "pink" });
  var text = $(this).text();
  console.log("You clicked " + text);
});

// Keypress Method

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    console.log("You hit enter");
  }
});

// On Method - can replace all methods
$("h1").on("click", function () {
  $(this).css({ color: "purple" });
});

$("input").on("keypress", function () {
  console.log("Key pressed");
});

$("button").on("mouseenter", function () {
  $(this).css({ fontWeight: "bold" });
});

$("button").on("mouseleave", function () {
  $(this).css({ fontWeight: "normal" });
});
