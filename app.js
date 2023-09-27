const socket = require("./socket");

socket.on("connection", (socket) => {
  console.log("a user login in");
  console.log("socket.broadcast-", socket.broadcast);

  socket.on("send-message", function (params) {
    console.log("前端传来数据--", params);
    const { type, data } = params;
    if (type === "init") {
      console.log("后端即将传数据");
      socket.emit("resend-message", {
        type: "refresh",
        data: data.name + " Jrue",
      });
    }
  });
});
