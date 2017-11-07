const assert = require('assert');
const hello = require('../src/hello');

try {
  assert.deepEqual(hello('Romain'), 'Bonjour Romain');
  console.log('Tests hello ok');
}
catch(err) {
  console.error('Problème avec hello');
  process.exit(1);
}
