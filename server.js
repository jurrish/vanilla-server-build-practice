'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  //if user makes a request to a route that we dont have, respond with this default
  res.statusCode = 404;
  res.end();
});

//start server
server.listen(PORT, () => {
  console.log(`server up on port: ${PORT}`);
});
