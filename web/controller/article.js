const { Article, User } = require('../model');
const { jwtSecret } = require('../config/config.default');
const jwt = require('../util/jwt');

exports.showIndex = async (req, res, next) => {
    try {
        const { sessionUser } = req.session;
        console.log(sessionUser);
        res.render('index');
    } catch (err) {
        next(err);
    }
};

exports.showEditor = async (req, res, next) => {
    try {
        res.render('editor');
    } catch (err) {
        next(err);
    }
};

exports.showArticle = async (req, res, next) => {
    try {
        res.render('article');
    } catch (err) {
        next(err);
    }
};
