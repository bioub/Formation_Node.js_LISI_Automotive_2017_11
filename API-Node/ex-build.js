const del = require('del');
const path = require('path');
const fs = require('fs-extra');

const distAbsPath = path.resolve(__dirname, 'dist');
const file1AbsPath = path.resolve(__dirname, 'src', 'a.js');
const file2AbsPath = path.resolve(__dirname, 'src', 'b.js');
const bundleAbsPath = path.resolve(distAbsPath, 'bundle.js');

/*
del(distAbsPath)
  .then(() => fs.mkdir(distAbsPath))
  .then(() => fs.readFile(file1AbsPath))
  .then(data => fs.appendFile(bundleAbsPath, data))
  .then(() => fs.readFile(file2AbsPath))
  .then(data => fs.appendFile(bundleAbsPath, data))
  .catch((err) => {
    console.log(err.message);
  });
  */

(async function () {
  try {
    await del(distAbsPath);

    await fs.mkdir(distAbsPath);

    const file1 = await fs.readFile(file1AbsPath);
    await fs.appendFile(bundleAbsPath, file1);

    const file2 = await fs.readFile(file2AbsPath);
    await fs.appendFile(bundleAbsPath, file2);

    console.log('Build done');
  } catch (err) {
    console.log(err.message);
  }
}());
// Supprimer le dossier dist avec del
// https://github.com/sindresorhus/del

// Créer le dossier dist avec fs.mkdir

// Utiliser fs.readFile pour lire le fichier
// src/a.js puis l'écrire dans dist/bundle.js
// avec fs.appendFile

// Idem pour src/b.js
