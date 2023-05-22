const url = require("url");
const methods = require("methods");
function Router() {
    this.stack = [];
}
methods.forEach((method) => {
    Router.prototype[method] = function (path, handler) {
        this.stack.push({
            path,
            method,
            handler,
        });
    };
});

Router.prototype.handle = function (req, res) {
    const { pathname } = url.parse(req.url);
    const method = req.method.toLowerCase();
    let index = 0;
    const next = () => {
        if (index >= this.stack.length) {
            return res.end("Cant get");
        }

        const layer = this.stack[index++];

        if (layer.path === pathname) {
            // ...
        }
        if (layer.method === method) {
            return layer.handler(req, res, next);
        }
        next();
    };

    next();
};
module.exports = Router;
