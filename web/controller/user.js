const { User } = require('../model');
const { jwtSecret, expTime } = require('../config/config.default');
const jwt = require('../util/jwt');

// 用户登录
exports.showLogin = async (req, res, next) => {
    try {
        res.render('login', {
            isLogin: true,
        });
    } catch (err) {
        next(err);
    }
};
// 用户注册
exports.showRegister = async (req, res, next) => {
    try {
        res.render('login', {
            isLogin: false,
        });
    } catch (err) {
        next(err);
    }
};
// 获取用户
exports.showSettings = async (req, res, next) => {
    try {
        res.render('settings');
    } catch (err) {
        next(err);
    }
};
// 更新用户
exports.showProfile = async (req, res, next) => {
    try {
        res.render('profile');
    } catch (err) {
        next(err);
    }
};

// 用户注册
exports.register = async (req, res, next) => {
    try {
        return res.render('login', {
            errors: ['用户名不能为空'],
        });
    } catch (err) {
        next(err);
    }
};
