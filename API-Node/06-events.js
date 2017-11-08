const events = require('events');
const readline = require('readline');
const EventEmitter = events.EventEmitter;

const ee = new EventEmitter();

const createUser = function(username) {
  // TODO CREATE USER IN DB

  ee.emit('user.created', {
    username
  });
};

ee.on('user.created', (user) => {
  console.log('User CREATED : ' + user.username);
});

createUser('Romain');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  console.log('Vous avez saisi : ' + line);
});
