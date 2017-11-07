// Module: créer une portée au niveau du fichier
// Automatique dans Node.js
// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert');
const maths = require('../src/maths'); // === exports

try {
  assert.deepEqual(maths.sum(1, 1), 3);
  console.log('Tests sum ok');
}
catch(err) {
  console.error('Problème avec sum');
  process.exit(1);
}
// });