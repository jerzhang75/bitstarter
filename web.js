var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var k = buffer.toString('utc 8', fs.readFileSync("index.html"));

app.get('/', function(request, response) {
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

