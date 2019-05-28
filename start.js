'use strict';

var config = require('./config');

require('sanity').check(
  ['PORT', 'PEBBLE_AUTH_URL']
);

var server = require('./server');

//server.listen(config.PORT);
server.listen(process.env.PORT);
