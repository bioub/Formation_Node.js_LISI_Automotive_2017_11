const contacts = [{
  prenom: 'Jean',
  id: 123,
}, {
  prenom: 'Eric',
  id: 456,
}];

exports.getList = () => Promise.resolve(contacts);

exports.getById = (id) => {
  const contact = contacts.find(c => c.id === Number(id));
  return Promise.resolve(contact);  
};

exports.remove = (id) => {
  const contact = contacts.find(c => c.id === Number(id));

  const i = contacts.indexOf(contact);
  contacts.splice(i, 1);

  return Promise.resolve(contact);  
};