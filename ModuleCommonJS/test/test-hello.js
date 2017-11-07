const assert = require('assert');
const chalk = require('chalk');
const hello = require('../src/hello');

try {
  assert.deepEqual(hello('Romain'), 'Bonjour Romain');
  console.log(chalk.green('Tests hello ok'));
}
catch(err) {
  console.error(chalk.red('Problème avec hello'));
  process.exit(1);
}
