//This is a very simple http server.

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from Node.js\n');

}).listen(port);