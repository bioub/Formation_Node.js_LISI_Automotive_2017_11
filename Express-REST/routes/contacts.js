const Router = require('express').Router;
const ctrl = require('../controllers/contacts');
const isAdmin = require('../middlewares/is-admin');
const bodyParser = require('body-parser');

const routes = Router();

routes.get('/', ctrl.list);
routes.post('/', 
  bodyParser.json(),
  ctrl.add,
);
routes.get('/:id', ctrl.show);
// routes.delete('/:id', isAdmin);
routes.delete('/:id', 
  isAdmin,
  ctrl.delete,
);

module.exports = routes;