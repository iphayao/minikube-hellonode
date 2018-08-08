var http = require('http');

var headleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('Hello Phayao!');
};

var www = http.createServer(headleRequest);
www.listen(8080);