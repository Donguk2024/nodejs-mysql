var http = require('http');
var url = require('url');
var topic = require('./lib/topic.js');
var author = require('./lib/author.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){ //초기 상태
        topic.home(request, response);
      } else {
        topic.descript(request,response);
      }
    } else if(pathname === '/create'){
      topic.create(request, response);
    } else if(pathname === '/create_process'){
      topic.create_process(request, response);
    } else if(pathname === '/update'){
      topic.update(request, response);
    } else if(pathname === '/update_process'){
      topic.update_process(request, response);
    } else if(pathname === '/delete_process'){
      topic.delete(request, response);
    } else if(pathname === '/author'){
      author.home(request, response);
    } else if(pathname === '/create_author'){
      author.create_process(request, response);
    } else if(pathname === '/author/update'){
      author.update(request, response);
    }else if(pathname === '/author/update_process'){
      author.update_process(request, response);
    }else if(pathname === '/author/delete_process'){
      author.delete(request, response);
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);