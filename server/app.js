'use strict';

var express = require('express'),
  path = require('path'),
  server = express(),
  env = process.env.NODE_ENV,
  directory = env === 'build' ? 'dist' : 'client',
  port = 20080;

server.use(express.static(path.join(__dirname, '/../', directory)));
server.listen(port);

console.log(`Serving the ${directory}/ directory at http://localhost:${port}/`); // eslint-disable-line no-console
