const express = require('express');
const contactsRoutes = require('./routes/contacts');

const app = express();

app.use('/api/contacts', contactsRoutes);

module.exports = app;