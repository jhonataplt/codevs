const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const profileController = require('./src/controllers/profileController');

// const { loginRequired } = require('.src/middlewares/middleware');

// route.get('/', destructuringMiddlwares, exampleController.example);

route.get('/', homeController.render);

route.get('/login', loginController.render);
route.post('/login/login', loginController.login);
route.post('/login/register', loginController.register);
route.get('/login/logout', loginController.logout);
route.get('/login/password-recovery', loginController.forgot);

route.get('/profile', profileController.render);

// route.get('/logout', loginController.logout);

module.exports = route;