const fs = require('fs');
const util = require('util');

const log = (filePath, msg) => {
  // [07/11/2017 à 14:41:34] Ligne 1
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;

  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const stat = util.promisify(fs.stat);
const mkdir = util.promisify(fs.mkdir);

console.time('DONE');
console.time('THREAD DISPO');
stat('logs')
  .catch((err) => mkdir('logs'))
  .then(() => log('logs/app.log', 'Ligne 1'))
  .then(() => log('logs/app.log', 'Ligne 2'))
  .then(() => log('logs/app.log', 'Ligne 3'))
  .then(() => log('logs/app.log', 'Ligne 4'))
  .then(() => log('logs/app.log', 'Ligne 5'))
  .then(() => {
    console.log('DONE');
    console.timeEnd('DONE');
  })
  .catch((err) => {
    console.log(err.message);
  });

console.timeEnd('THREAD DISPO');
