const express = require("./express");
const app = express();

app.get("/", (req, res, next) => {
    console.log(11);
    next();
});
app.get("/", (req, res, next) => {
    console.log(112);
    res.end("get home");
});
app.post("/", (req, res) => {
    res.end("post home");
});

app.listen(13000, () => {
    console.log(`start 13000`);
});
