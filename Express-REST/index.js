const app = require('./app');
const http = require('http');

const httpServer = http.createServer(app);

httpServer.on('error', (err) => {
  console.log('Erreur', err.message);
});

httpServer.listen(8080, () => {
  console.log('Server started');
});