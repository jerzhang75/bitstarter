var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var index = fs.readFileSync("index.html");
  var buffer = new Buffer(index);
  var k = buffer.toString();
  response.send(k);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

