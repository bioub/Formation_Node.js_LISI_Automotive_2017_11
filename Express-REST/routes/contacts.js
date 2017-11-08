const Router = require('express').Router;
const ctrl = require('../controllers/contacts');
const routes = Router();

routes.get('/', ctrl.list);
routes.get('/:id', ctrl.show);
routes.delete('/:id', ctrl.delete);

module.exports = routes;