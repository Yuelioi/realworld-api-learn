const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const path = require('path');

require('./model');

const app = express();
const PORT = process.env.PROT || 19014;

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
    // app.use(errorhandler());
}

app.listen(PORT, () => {
    console.log(`running at localhost:${PORT}`);
});
