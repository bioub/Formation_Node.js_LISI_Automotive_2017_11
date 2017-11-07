const fs = require('fs');

const log = (filePath, msg, cb) => {
  // [07/11/2017 à 14:41:34] Ligne 1
  const line = `[${(new Date).toLocaleString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

console.time('DONE');
console.time('THREAD DISPO');
fs.stat('logs', (err, stat) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir('logs', (err) => {
      if (err) {
        console.log(err.message);
      }
      next();
    });
  }
  next();
});

// CALLBACK HELL
function next() {
  log('logs/app.log', 'Ligne 1', (err) => {
    if (err) {
      console.log(err.message);
    }
    log('logs/app.log', 'Ligne 2', (err) => {
      if (err) {
        console.log(err.message);
      }
      log('logs/app.log', 'Ligne 3', (err) => {
        if (err) {
          console.log(err.message);
        }
        log('logs/app.log', 'Ligne 4', (err) => {
          if (err) {
            console.log(err.message);
          }
          log('logs/app.log', 'Ligne 5', (err) => {
            if (err) {
              console.log(err.message);
            }
            console.log('DONE');
            console.timeEnd('DONE');
          });
        });
      });
    });
  });

}
console.timeEnd('THREAD DISPO');
