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





async function logs() {
  try {
    try {
      await stat('logs');
    }
    catch (err) {
      await mkdir('logs');
    }
    // logs existe

    await log('logs/app.log', 'Ligne 1');
    await log('logs/app.log', 'Ligne 2');
    await log('logs/app.log', 'Ligne 3');
    await log('logs/app.log', 'Ligne 4');
    await log('logs/app.log', 'Ligne 5');
    console.log('DONE');
    console.timeEnd('DONE');
  }
  catch (err) {
    console.log(err.message);
  }
}


console.time('DONE');
console.time('THREAD DISPO');
logs();
console.timeEnd('THREAD DISPO');
