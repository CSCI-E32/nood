var http = require('http');
var fs = require('fs');
var file = fs.createReadStream("photos.json");

var server = http.createServer(function(request, response){
  file.pipe(response);
});

server.listen(7000);
