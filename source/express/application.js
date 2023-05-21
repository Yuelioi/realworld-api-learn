const http = require("http");
const methods = require("methods");
const Router = require("./router");

function App() {
    this._router = new Router();
    // this.routers = [
    //     { path: "", method: "", handler: () => {} }
    // ];
}

methods.forEach((method) => {
    App.prototype[method] = function (path, handler) {
        this._router[method](path, handler);
    };
});

App.prototype.listen = function (...args) {
    const server = http.createServer((req, res) => {
        this._router.handle(req, res);
        // const { pathname } = url.parse(req.url);
        // const method = req.method.toLowerCase();
        // const route = this.routers.find((router) => router.path === pathname && router.method === method);

        // if (route) {
        //     return route.handler(req, res);
        // }
        // res.end("404 not found");
    });

    server.listen(...args);
};

module.exports = App;
