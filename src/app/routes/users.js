const routes = require('express').Router();
const {
    UserController,
} = require('../../shared/controllers/index');


routes.get('/users', UserController.store);


module.exports = routes;