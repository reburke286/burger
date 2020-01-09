$(document).ready(function() {
  $(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");

      var newDevouredState = {
        devoured: 1
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        console.log("changed devoured to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
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
