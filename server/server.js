let express = require('express');
let path = require("path");
let fallback = require('express-history-api-fallback')
let proxyMiddleWare = require("http-proxy-middleware");
let login = require("./login");
let home = require("./home");
require("colors");


const proxyPath = "http://192.168.1.42";//代理地址 self
const proxyReg = "/api"
const PORT = 9000;
const TITLE = "test";
const STATIC_ROOT = __dirname;
let app = express();
var router = express.Router();
exports.router = router;
app.locals.title = TITLE;
const staticFile = express.static(STATIC_ROOT, {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
});
app.use(middleware);
app.use(staticFile)
app.use(fallback("index.html", {root: STATIC_ROOT}))
app.use(proxyReg, proxyMiddleWare({
  target: proxyPath,
  secure: false,
  pathRewrite: {
    '^/api' : '',     // rewrite path
  }
}))

// 添加路由监听
app.use('/', router);
login.listen(router);
home.listen(router);

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(STATIC_ROOT, '/index.html'))
})

app.listen(getPort(), function () {
  console.log("应用实例，访问地址为 http://%s:%s".green, "localhost", getPort());
})
function getPort() {
  let port = PORT;
  process.argv.forEach(function (val, index, array) {
    let match = val.match(/^port=(.*)$/);
    if (match) {
      port = match[1];
    }
  });
  return port
}
function middleware(req, res, next) {
  console.log("time: %s,url: %s".blue, Date.now(), req.url);
  next();
}
