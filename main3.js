var http = require('http');
var url = require('url');
var homepage = require('./lib/homepage.js');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
        homepage.homepage_login(request, response);
    }
    else {
        response.writeHead(404);
        response.end('Not found');
    }
});

app.listen(3000);