var db = require('./db.js');
var template = require('./template.js');
var path = require('path');
var url = require('url');
var qs = require('querystring');
const http = require('http');

exports.home = function(request, response){
  db.query('SELECT * FROM topic', function(error, topics){
    if(error){
      throw error;
    }
    db.query('SELECT * FROM author', function(error2, authors){ 
      if(error2){
        throw error2;
      }           
      var title = 'Author';
      var list = template.list(topics);
      var html = template.HTML(title, list,
      `${template.authorTable(authors)}
        <style>
          table{
            border-collapse: collapse;
          }
          td{
            border: 1px solid black;
          }
        </style> 
        <form action="/create_author" method="post">
          <p><input type="text" name="name" placeholder="name"></p>
          <p>
            <textarea name="profile" placeholder="profile"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>`
        ,""
      );
      response.writeHead(200);
      response.end(html)
    });
  });
}

exports.create_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`INSERT INTO author(name, profile) 
                VALUES(?,?)`,
                [post.name, post.profile],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/author`});
                  response.end();

                }
      );
  });
}

exports.update = function(request, response){
  db.query('SELECT * FROM topic', function(error, topics){
    if(error){
      throw error;
    }
    db.query('SELECT * FROM author', function(error2, authors){ 
      if(error2){
        throw error2;
      }  
      var _url = request.url;
      var queryData = url.parse(_url, true).query;         
      var title = 'Author';
      var list = template.list(topics);
      var html = template.HTML(title, list,
      `${template.authorTable(authors)}
        <style>
          table{
            border-collapse: collapse;
          }
          td{
            border: 1px solid black;
          }
        </style> 
        <form action="/author/update_process" method="post">
            <p><input type="hidden" name="id" value="${queryData.id}"></p>
            <p><input type="text" name="name" placeholder="name"></p>
            <p>
              <textarea name="profile" placeholder="profile"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
        </form>`
        ,""
      );
      response.writeHead(200);
      response.end(html)
    });
  });
}

exports.update_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`UPDATE author SET name = ?, profile = ? WHERE id = ?`,
                [post.name, post.profile,post.id],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/author`});
                  response.end();
                }
      );
  });
}

exports.delete = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`DELETE FROM topic WHERE id = ?`,
      [post.id],
      function(error1, result){
        if(error1){
          throw error1;
        }
        db.query(`DELETE FROM author WHERE id = ?`,
        [post.id],
        function(error2, result){
          if(error2){
            throw error2;
          }
          response.writeHead(302, {Location: `/author`});
          response.end();
        });
      });
  });
}