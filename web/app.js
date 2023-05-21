const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const { sessionSecret } = require('./config/config.default');

require('./model');

const app = express();
const PORT = process.env.PROT || 19014;

const MongoStore = require('connect-mongo');

// 配置 session 中间件
//   存 1. 生成ID 2. 存储数据
//      req.session.xx = xx
//   取 1. 根据ID获取容器数据
//      req.session.xx
// 注意: 默认存在内存里
app.use(
    session({
        secret: sessionSecret, // 秘钥
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60, // 过期时间, 单位毫秒
            // secure: true, // https协议才会收发cookie
        },
        store: MongoStore.create({
            mongoUrl: 'mongodb://localhost/realworld',
        }),
        // 会话cookie, 重启浏览器就没了
        // cookie过期 会生成新的session ID
    })
);
app.use((req, res, next) => {
    // 统一给模板添加数据
    app.locals.sessionUser = req.session.user;
    next();
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// 渲染.art结尾的资源, 使用art-template渲染
app.engine('art', require('express-art-template'));

// art-template art模板引擎配置
// * 官网给的是view 其实是view options
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
});

// art模板文件存储目录
app.set('views', path.join(__dirname, 'views'));

// 渲染可以省略的后缀
app.set('view engine', 'art');

// 使用中间件
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

// 使用路由

app.use('/', require('./router'));

// 异常处理
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler());
}

app.listen(PORT, () => {
    console.log(`running at localhost:${PORT}`);
});
