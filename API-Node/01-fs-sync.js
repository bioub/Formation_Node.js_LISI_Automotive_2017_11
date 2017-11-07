const fs = require('fs');

const log = (filePath, msg) => {
  // [07/11/2017 à 14:41:34] Ligne 1
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
};

console.time('DONE');
console.time('THREAD DISPO');
try {
  try {
    const stat = fs.statSync('logs');
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync('logs');
    }
  }
  // logs existe

  log('logs/app.log', 'Ligne 1');
  log('logs/app.log', 'Ligne 2');
  log('logs/app.log', 'Ligne 3');
  log('logs/app.log', 'Ligne 4');
  log('logs/app.log', 'Ligne 5');
}
catch (err) {
  console.log(err.message);
}

console.log('DONE');
console.timeEnd('THREAD DISPO');
console.timeEnd('DONE');
