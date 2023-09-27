const koa = require("koa2");
const app = new koa();

const server = require("http").Server(app.callback());
const socket = require("socket.io")(server);

server.listen(3000, () => {
  //这里很关键  使用的是server来监听路由了 而不是使用router了
  console.log("Server is running on port 3000");
});

module.exports = socket;
