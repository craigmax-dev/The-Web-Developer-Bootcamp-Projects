// Check off todos
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete todos
$("ul").on("click", "span", function (event) {
  // Stop propagation outside of span
  event.stopPropagation();
  // Fade out and remove
  $(this)
    .parent()
    .fadeOut(300, function () {
      $(this).remove();
    });
});

// Create todos
$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    // Grab new todo text
    var todoText = $(this).val();
    // Reset input
    $(this).val("");
    // Create new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></span></i>" + todoText + "</li>"
    );
  }
});

// Show/hide input
$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
});
