const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

const router = require("./router/index");
const errorHandler = require("./middleware/error-handler");

require("./model/index");

// 使用中间件
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// 使用路由
app.use("/api", router);

// 异常处理
app.use(errorHandler());

const PORT = process.env.PROT || 19015;

app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
});
