var clock = require('node-notifier');
var db = require('./db.js');
var template = require('./template2.js');
var path = require('path');
var url = require('url');
var qs = require('querystring');

exports.home = function(request, response){
  var title = '로그인';
  var html = template.HTML(title);
  response.writeHead(200);
  response.end(html)
}

exports.homepage_login = function(request, response){
  db.query('SELECT *,DATE_FORMAT(date, "%y.%m.%d") AS formatted_datetime FROM writing_msg', function(error, result){
    if(error){
      throw error
    }
    var title = '게시판';
    var list = template.homepageTable(result, request);
    var html = template.homepage_login(title, list, request);
    response.writeHead(200);
    response.end(html)
  });
}

exports.homepage_logout = function(request, response){
  db.query('SELECT *,DATE_FORMAT(date, "%y.%m.%d") AS formatted_datetime FROM writing_msg ORDER BY date DESC', function(error, result){
    if(error){
      throw error
    }
    var title = '게시판';
    var list = template.homepageTable(result,request);
    var html = template.homepage_logout(title, list, request);
    response.writeHead(200);
    response.end(html)
  });
}

exports.login = function(request, response){
  var title = '로그인';
  var html = template.login(title);
  response.writeHead(200);
  response.end(html)
}

exports.signup = function(request, response){
  var title = '회원가입';
  var html = template.signup(title);
  response.writeHead(200);
  response.end(html)
}

exports.write = function(request, response){
  var title = '글 작성';
  var html = template.write(title, request);
  response.writeHead(200);
  response.end(html)
}

exports.surfing = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  db.query(`SELECT * FROM writing_msg WHERE writeNum = ? AND name = ?`,
  [queryData.id, queryData.name],
  function(error, result){
    if(error){
      throw error;
    }
    var title = '글 확인';
    var html = template.surfing(title, result, request);
    response.writeHead(200);
    response.end(html);
  });
}

exports.applying = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  db.query(`SELECT * FROM user WHERE id = ?`,
  [queryData.user],
  function(error, result){
    if(error){
      throw error;
    }
    var title = '지원서 작성';
    var html = template.applying(title, result, request);
    response.writeHead(200);
    response.end(html);
  });
}

exports.update = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`SELECT * FROM writing_msg WHERE writeNum=?`,[queryData.id] , function(error, result){          
    if(error){
      throw error;
    }
    var title = '글 수정';
    var html = template.update(title, request, result);
    response.writeHead(200);
    response.end(html);
  });

}

exports.application = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`SELECT *,DATE_FORMAT(apply_date, "%y.%m.%d") AS formatted_datetime FROM applys WHERE applied_user = ? ORDER BY apply_date DESC`,
    [queryData.user], function(error, result){
    if(error){
      throw error
    }
    db.query(`SELECT *,DATE_FORMAT(apply_date, "%y.%m.%d") AS formatted_datetime FROM applys WHERE user = ? ORDER BY apply_date DESC`,
    [queryData.user],function(error2, result2){
      if(error2){
        throw error2
      }
      var title = '지원현황확인';
      var list = template.applicationTable(result, result2, request);
      var html = template.application(title, list, request);
      response.writeHead(200);
      response.end(html)
    });
  });
}

exports.checking = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  db.query(`SELECT * FROM applys WHERE idapplys = ?`,
  [queryData.id],
  function(error, result){
    if(error){
      throw error;
    }
    var title = '지원서 확인';
    var html = template.checking(title, result, request);
    response.writeHead(200);
    response.end(html);
  });
}

exports.signup_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`INSERT INTO user(name, id, password, major) 
                VALUES(?,?,?,?)`,
                [post.name, post.username, post.password,post.major],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/login`});
                  response.end();
                }
      );
  });
}

exports.login_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`SELECT * FROM user WHERE id = ? AND password = ?`,
                [post.username, post.password],
                  function(error, result){
                    if(error){
                      throw error;
                    }

                    if (result.length > 0) {
                      response.writeHead(302, { Location: `/?name=${post.username}` });
                      response.end();
                    } else {
                      // 사용자가 없는 경우 또는 로그인 실패한 경우 처리
                      clock.notify({
                        message: "다시 입력하세요."
                      })
                      response.writeHead(302, { Location: '/login' });
                      response.end();
                    }
                }
      );
  });
}

exports.write_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`INSERT INTO writing_msg(name, title, content, date) 
                VALUES(?,?,?,NOW())`,
                [post.writer, post.title, post.content],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/?name=${post.writer}`});
                  response.end();
                }
      );
  });
}

exports.apply_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`INSERT INTO applys(user, user_major, applied_user, apply_title, apply_content, apply_date) 
                VALUES(?,?,?,?,?,NOW())`,
                [post.applier, post.major, post.writer, post.title, post.content],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/?name=${post.applier}`});
                  response.end();
                }
      );
  });
}

exports.update_process = function(request, response){
  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`UPDATE writing_msg SET title = ?, content = ? WHERE writeNum = ?`,
                [post.title, post.content,post.write_id],
                function(error, result){
                  if(error){
                    throw error;
                  }
                  response.writeHead(302, {Location: `/?name=${post.writer}`});
                  response.end();
                }
      );
  });
}

exports.reject_process = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`UPDATE applys SET apply_result = "거절" WHERE idapplys = ?`,
            [queryData.id],
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/homepage/application?user=${queryData.user}`});
              response.end();
            }
  );
}

exports.pass_process = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`UPDATE applys SET apply_result = "수락" WHERE idapplys = ?`,
            [queryData.id],
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/homepage/application?user=${queryData.user}`});
              response.end();
            }
  );
}

exports.team_process = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`UPDATE applys SET apply_result = "확정" WHERE idapplys = ?`,
            [queryData.id],
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/homepage/application?user=${queryData.user}`});
              response.end();
            }
  );
}

exports.teamReject_process = function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  db.query(`UPDATE applys SET apply_result = "지원취소" WHERE idapplys = ?`,
            [queryData.id],
            function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `/homepage/application?user=${queryData.user}`});
              response.end();
            }
  );
}