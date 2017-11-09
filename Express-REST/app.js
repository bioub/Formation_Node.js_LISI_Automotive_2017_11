const express = require('express');
const contactsRoutes = require('./routes/contacts');
const notFoundApi = require('./middlewares/not-json-api');
const error500 = require('./middlewares/error-500');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/address-book', { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();

// middleware log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/api/contacts', contactsRoutes);

app.use('/api', notFoundApi); // 3 params
app.use('/api', error500); // 4 params

module.exports = app;