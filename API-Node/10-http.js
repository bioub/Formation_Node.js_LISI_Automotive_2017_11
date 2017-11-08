const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('Hello');
      res.setHeader('Content-type', 'text/plain');
      res.end();
      break;
    case '/api/contacts':
      res.write(JSON.stringify({prenom: 'Romain'}));
      res.setHeader('Content-type', 'application/json');
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.write('Not Found');
      res.end();
  }
});

/*
server.on('listening', () => {
  console.log('listening');
});
*/

/*
server.on('request', (req, res) => {
  res.write('Hello');
  res.end();
});
*/

server.on('error', (err) => {
  console.log('error', err.code, err.message);
});

server.listen(1234, () => {
  console.log('listening');
});

