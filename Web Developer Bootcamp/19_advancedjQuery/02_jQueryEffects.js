// Fading
$("button").on("click", function () {
  $("div").fadeOut(1000, function () {
    // Remove element once fadeout complete
    $(this).remove();
  });
});

// Other animation functions
// .fadeIn()
// .fadeToggle()

// Sliding
// .slideUp
// .slideDown
// .slideToggle
