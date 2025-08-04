const mysql = require("mysql2");

const dbinfo = {
  host: "conative.myds.me",
  port: 8085,
  user: "root",
  password: "kyj123",
  database: "myBlog",
};

module.exports = mysql.createConnection(dbinfo);
