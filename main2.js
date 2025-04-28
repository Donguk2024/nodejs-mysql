var http = require('http');
var url = require('url');
var homepage = require('./lib/homepage.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.name === undefined){ //초기 상태
        homepage.homepage_login(request, response);
      }
      else{
        homepage.homepage_logout(request, response);
      }
    } 
    else if(pathname ==='/login'){
      homepage.login(request, response);
    }
    else if(pathname === '/signup.html'){
      homepage.signup(request, response);
    }
    else if(pathname === '/signup_process'){
      homepage.signup_process(request, response);
    }
    else if(pathname === '/login_process'){
      homepage.login_process(request, response);
    }
    else if(pathname === '/homepage/writing'){
      homepage.write(request, response);
    }
    else if(pathname === '/write_process'){
      homepage.write_process(request, response);
    }
    else if(pathname === '/homepage/surfing'){
      homepage.surfing(request, response);
    }
    else if(pathname === '/homepage/applying'){
      homepage.applying(request, response);
    }
    else if(pathname === '/apply_process'){
      homepage.apply_process(request, response);
    }
    else if(pathname === '/homepage/updating'){
      homepage.update(request, response);
    }
    else if(pathname === '/update_process'){
      homepage.update_process(request, response);
    }
    else if(pathname === '/homepage/application'){
      homepage.application(request, response);
    }
    else if(pathname === '/homepage/checking'){
      homepage.checking(request, response);
    }
    else if(pathname === '/reject_process'){
      homepage.reject_process(request, response);
    }
    else if(pathname === '/pass_process'){
      homepage.pass_process(request, response);
    }
    else if(pathname === '/team_process'){
      homepage.team_process(request, response);
    }
    else if(pathname === '/teamReject_process'){
      homepage.teamReject_process(request, response);
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);