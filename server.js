const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
const routes = require("./controllers/burgers_controller.js");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// Use Handlebars to render the html pages with the plans in it.
app.get("/", function(req, res) {
  res.render("index");
});
// require("/routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
