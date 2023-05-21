const { Article, User } = require('../model');
const { jwtSecret } = require('../config/config.default');
const jwt = require('../util/jwt');

exports.showIndex = async (req, res, next) => {
    try {
        let page = req.query.page || 1;
        let pageSize = 5;
        const articles = await Article.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);
        const articlesCount = await Article.countDocuments();
        console.log(page);
        res.render('index', {
            articles,
            page,
            pageSize,
            articlesCount,
            totalPage: Math.ceil(articlesCount / pageSize),
        });
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
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article({
            ...req.body.article,
            author: req.session.user._id,
        });
        await article.save();
        res.status(201).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};
