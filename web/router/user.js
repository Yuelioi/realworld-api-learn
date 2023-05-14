const express = require('express');
const auth = require('../middleware/auth');
const userValidator = require('../validator/user');
const userController = require('../controller/user');

const router = express.Router();

router.get('/login', userController.showLogin);

router.get('/register', userController.showRegister);

router.get('/settings', userController.showSettings);

router.get('/profile/:username', userController.showProfile);

router.get('/profile/:username/favorites', userController.showProfile);

module.exports = router;
