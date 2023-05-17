const express = require('express');
const userController = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/login', userController.showLogin);

router.get('/register', userController.showRegister);

router.post('/register', userValidator.register, userController.register);

router.get('/settings', auth, userController.showSettings);

router.get('/profile/:username', auth, userController.showProfile);

router.get('/profile/:username/favorites', auth, userController.showProfile);

module.exports = router;
