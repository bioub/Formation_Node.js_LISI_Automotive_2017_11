const Router = require('express').Router;
const ctrl = require('../controllers/contacts');
const isAdmin = require('../middlewares/is-admin');

const routes = Router();

routes.get('/', ctrl.list);
routes.get('/:id', ctrl.show);
// routes.delete('/:id', isAdmin);
routes.delete('/:id', 
  isAdmin,
  ctrl.delete,
);

module.exports = routes;