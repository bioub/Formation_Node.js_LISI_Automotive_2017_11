const net = require('net');

const server = net.createServer();

server.on('listening', () => {
  console.log('server started');
});

server.on('connection', (socket) => {
  console.log('connection');
  /*
  socket.on('data', data => {
    console.log(data.toString());
  });
  */
  socket.pipe(process.stdout);
});

server.on('error', (err) => {
  console.log('error');
});

server.listen(1234);

