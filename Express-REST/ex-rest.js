const express = require('express');
const app = express();

const contacts = [{
  prenom: 'Jean',
  id: 123,
}, {
  prenom: 'Eric',
  id: 456,
}];

// GET /api/contacts -> JSON tableau complet

// GET /api/contacts/:id -> JSON le contact demandé
// (req.params.id <=> string)

// DELETE  /api/contacts/:id ->
// JSON le contact supprimer et le supprime 

/*
app.get('/hello/:prenom', (req, res, next) => {
  res.send(`Hello ${req.params.prenom}`);
});
*/

app.listen(8080, () => {
  console.log('Server started');
});
