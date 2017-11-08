// Module: créer une portée au niveau du fichier
// Automatique dans Node.js
// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert');
const chalk = require('chalk');
const maths = require('../src/maths'); // === exports

try {
  assert.deepEqual(maths.sum(1, 1), 3);
  console.log(chalk.green('Tests sum ok'));
}
catch(err) {
  console.error(chalk.red('Problème avec sum'));
  process.exit(1);
}
// });
