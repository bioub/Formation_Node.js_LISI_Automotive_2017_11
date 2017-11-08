const model = require('../models/contact');

exports.list = async (req, res, next) => {
  const contacts = await model.getList();
  res.json(contacts);
};

exports.show = async (req, res, next) => {
  const contact = await model.getById(req.params.id);
  // TODO 404
  res.json(contact);
};

exports.delete = async (req, res, next) => {
  const contact = await model.remove(req.params.id);
  // TODO 404
  res.json(contact);
};