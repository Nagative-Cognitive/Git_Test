var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("안녕하세요111");
});

router.get("/:abcc", function (req, res, next) {
  console.log(req.query.a);

  res.send("안녕하세요" + req.params.abcc);
});

module.exports = router;
