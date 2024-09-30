//demo_querystring.js

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.name + " " + q.city;
  res.end(txt);
}).listen(8080);