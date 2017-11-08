const fs = require('fs');

const buffer = fs.readFileSync('logs/app.log');
console.log(buffer.toString('utf-8'));
