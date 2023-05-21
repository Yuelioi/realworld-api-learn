module.exports = async (req, res, next) => {
    // 检查有没有session user
    const sessionUser = req.session.user;

    if (sessionUser) {
        return next();
    }
    // 重定向到登录页
    // Response Headers 里 302 location
    // res.redirect('./login');
};
