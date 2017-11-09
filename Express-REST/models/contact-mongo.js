const mongoose = require('mongoose');

const adresseSchema = new mongoose.Schema({
  ville: String,
  codePostal: String,
});

const Contact = mongoose.model('contacts', {
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
  },
  nom: {
    type: String,
    required: true
  },
  adresse: adresseSchema,
});

exports.getList = () => Contact.find();
exports.getById = (id) => Contact.findById(id);
exports.remove = (id) => Contact.findByIdAndRemove(id);
exports.create = (doc) => Contact.create(doc);