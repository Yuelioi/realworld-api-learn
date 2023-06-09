const { Article, User } = require("../model");
const { jwtSecret } = require("../config/config.default");
const jwt = require("../util/jwt");

// 获取文章列表
// * https://www.realworld.how/docs/specs/backend-specs/endpoints#get-articles
exports.getArticles = async (req, res, next) => {
    try {
        const { limit = 5, offset = 0, tag, author } = req.query;

        const filter = {};

        if (tag) {
            // 需要与模型中的名称一致
            filter.tagList = tag;
        }
        if (author) {
            const user = await User.findOne({ username: author });
            filter.author = user ? user._id : null;
        }

        const articles = await Article.find(filter)
            .skip(offset) // 跳过多少条
            .limit(limit) // 取多少条
            .sort({
                // 1: 升序 -1: 降序
                createAt: -1,
            });
        const articlesCount = await Article.countDocuments();

        res.status(200).json({
            articles,
            articlesCount,
        });
    } catch (err) {
        next(err);
    }
};

// 获取关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
    try {
        res.send("Post User Login");
    } catch (err) {
        next(err);
    }
};

// 获取文章
// * https://www.realworld.how/docs/specs/backend-specs/endpoints#get-article
exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId);
        await article.populate("author");
        if (!article) {
            return res.status(404).end();
        }
        res.status(200).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};

// 创建文章
// * https://www.realworld.how/docs/specs/backend-specs/endpoints#create-article
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article);
        // user 是 auth 挂载的
        article.author = req.user._id;

        // 使用populate 将user_id 转为对应的user数据
        await article.populate("author");

        // 保存数据
        await article.save();

        // 发送成功请求
        res.status(201).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
    try {
        const { article } = req;
        const bodyArticle = req.body.article;

        Object.assign(article, {
            title: bodyArticle.title ?? article.title,
            description: bodyArticle.description ?? article.description,
            body: bodyArticle.body ?? article.body,
        });

        await article.save();

        res.status(200).json({
            article,
        });
    } catch (err) {
        next(err);
    }
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
    try {
        const { article } = req;
        await article.remove();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
};

// 添加评论
exports.createArticleComment = async (req, res, next) => {
    try {
        res.send("createArticleComment");
    } catch (err) {
        next(err);
    }
};

// 获取评论列表
exports.getArticleComments = async (req, res, next) => {
    try {
        res.send("getArticleComments");
    } catch (err) {
        next(err);
    }
};

// 删除评论
exports.deleteArticleComments = async (req, res, next) => {
    try {
        res.send("deleteArticleComments");
    } catch (err) {
        next(err);
    }
};
