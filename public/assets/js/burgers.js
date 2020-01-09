$(document).ready(function() {
  $(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
      console.log(newDevoured);

      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/", id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        // location.reload();
      });
    });
  });

  $("#add-btn").on("click", function() {
    let newBurger = {
      name: $("#newBurger").val(),
      devoured: 0
    };
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log(newBurger);
      $("#newBurger").val("");
      location.reload();
    });
  });
});
