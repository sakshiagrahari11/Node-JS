var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (err) throw err;
        console.log('Saved!');
        return res.end("Hello content!");
      });
}).listen(8080);


  