var express = require("express");
var router = express.Router();
const mysql = require("../module/mysql");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const sql = "select title, content from Boom";
  mysql.query(sql, (err, result1) => {
    res.json({
      result: result1,
    });
  });
});

router.post("/", function (req, res, next) {
  const title = req.body.title;
  const content = req.body.content;

  const sql = "INSERT INTO Boom(title, content) VALUES (?,?)";
  mysql.query(
    sql,
    [title, content],

    (err, result1) => {
      if (err) {
        console.log(err);
      }
      res.json({
        result: result1,
      });
    }
  );
});

module.exports = router;
