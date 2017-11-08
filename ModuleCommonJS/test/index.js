const fs = require('fs');

const files = fs.readdirSync(__dirname);

for (let f of files) { // ES6
  if (f.startsWith('test-')) {
    require('./' + f);
  }
}
