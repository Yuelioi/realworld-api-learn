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
        // 1. 数据验证
        // 2. 创建新用户
        const user = new User(req.body.user);
        await user.save();

        // 3. 保持登录状态
        req.session.user = user;

        // 4. 跳转到首页
        res.status(200).json({ user });
    } catch (err) {
        next(err);
    }
};
