// Module: créer une portée au niveau du fichier
// Automatique dans Node.js
// (function (exports, require, module, __filename, __dirname) {
const convert = (v) => Number(v);
const sum = (a, b) => convert(a) + convert(b);
const substract = (a, b) => convert(a) + convert(b);

exports.sum = sum;
exports.substract = substract;
// });