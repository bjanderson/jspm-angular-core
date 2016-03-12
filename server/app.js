var express = require('express'),
  server = express(),
  port = 20080;

server.use(express.static(__dirname + '/../dist'));
server.listen(port);

//console.log('Server listening at localhost:' + port +'/');
