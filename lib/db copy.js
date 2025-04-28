var mysql = require('mysql');  // mysql 모듈 로드
var db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  });
  db.connect();
  module.exports = db;

