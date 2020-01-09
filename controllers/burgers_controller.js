const express = require("express");

const router = express.Router();

const burger = require("../models/model_burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);

    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertID });
    }
  );
});

router.put("/", function(req, res) {
  console.log("req.body = " + req.params);
  const condition = "id = " + req.params.id;
  console.log(condition);
  burger.update({ devoured: req.body.devoured }, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
