var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("hello");
});

router.get("/:no", function (req, res, next) {
  console.log("abc");

  res.send("hi" + req.params);
});

module.exports = router;
