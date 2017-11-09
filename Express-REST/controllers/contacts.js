const model = require('../models/contact-mongo');

exports.list = async (req, res, next) => {
  const contacts = await model.getList();
  res.json(contacts);
};

exports.show = async (req, res, next) => {
  const contact = await model.getById(req.params.id);
  
  if (!contact) {
    req.errorMsg = 'Contact not found';
    // next(err); // error500
    return next(); // error404
  }

  res.json(contact);
};

exports.delete = async (req, res, next) => {
  const contact = await model.remove(req.params.id);
  
  if (!contact) {
    req.errorMsg = 'Contact not found';
    return next();
  }

  res.json(contact);
};