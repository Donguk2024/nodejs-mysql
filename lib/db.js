var mysql = require('mysql');  // mysql 모듈 로드
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'opentutorials'
  });
  db.connect();
  module.exports = db;

