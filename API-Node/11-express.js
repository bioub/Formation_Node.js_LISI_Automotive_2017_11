const express = require('express');
const app = express();

app.all('/', (req, res, next) => {
  res.send('<h2>Hello</h2>');
});

app.get('/api/contacts', (req, res, next) => {
  res.json({prenom: 'Romain'});
});

app.listen(8080, () => {
  console.log('Server started');
});
