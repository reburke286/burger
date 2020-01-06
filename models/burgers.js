$("#add-btn").on("click", function() {
  const newBurger = {
    name: $("#newBurger").val()
  };
  console.log(newBurger);
  $("#newBurger").val("");
});
