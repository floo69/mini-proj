const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "college",
});

module.exports = pool;
