const express = require('express');
const userController = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/login', userController.showLogin);

router.get('/register', userController.showRegister);
router.get('/logout', userController.logout);

router.post('/register', userValidator.register, userController.register);
router.post('/login', userValidator.login, userController.login);

router.get('/settings', auth, userController.showSettings);

router.get('/profile/:username', auth, userController.showProfile);

router.get('/profile/:username/favorites', auth, userController.showProfile);

module.exports = router;
