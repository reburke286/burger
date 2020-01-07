$(".devoured").on("click", function(event) {
  const id = $(this).data("id");
  const updateDevoured = $(this).data("devoured");

  const newDevouredState = {
    devoured: updateDevoured
  };
  console.log(id, updateDevoured);

  //Send PUT request
  $.ajax("/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(function() {
    console.log("changed devoured to ", newDevouredState);
    location.reload();
  });
});

$("#add-btn").on("click", function() {
  const newBurger = {
    name: $("#newBurger").val(),
    devoured: $("[name=devoured]:checked").val()
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
