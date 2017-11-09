const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
  prenom: String,
  nom: String,
});

exports.getList = () => Contact.find();
exports.getById = (id) => Contact.findById(id);
exports.remove = (id) => Contact.findByIdAndRemove(id);
