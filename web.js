var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  response.send(k);
  var index = fs.readFileSync("index.html");
  var buffer = new Buffer();
  var k = buffer.toString(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

