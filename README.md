## 介绍

这是学习 express 时的工程

## 学习内容

- [express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## 课外延伸

- [mongoose](https://mongoosejs.com/docs/guide.html) 好用的mongoDB模块
- [tree-node-cli](https://www.npmjs.com/package/tree-node-cli) tree命令增强

## 目录结构

```text
treee --dirs-first -I "node_modules|README.md|package.json|pnpm-lock.yaml"


├── config               配置文件
│   └── config.default.js
├── controller           路由控制中心
│   ├── article.js
│   └── user.js
├── middleware           常用中间件
│   ├── auth.js
│   ├── error-handler.js
│   └── validate.js
├── model                数据持久层
│   ├── article.js
│   ├── base-model.js
│   ├── index.js
│   └── user.js
├── router               路由控制
│   ├── article.js
│   ├── index.js
│   └── user.js
├── test
├── util                 工具
│   ├── jwt.js
│   └── md5.js
├── validator            验证
│   ├── article.js
│   └── user.js
├── app.js               入口

```

## 问题

- 已清空

## 参考

[Node.js 系列教程之 Express](https://www.bilibili.com/video/av717843963/?p=55&t=5)
