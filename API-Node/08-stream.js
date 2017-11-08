const fs = require('fs');

const rs = fs.createReadStream('logs/app.log');

// cat logs/app.log | echo
rs.pipe(process.stdout);
