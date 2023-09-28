module.exports = (server) => {

    return (ctx) => {
        // import websocket
        console.log('server-', server)
        console.log('ctx-', ctx)
        
        const socket = require("socket.io")(server);

        socket.on("connection", (socket) => {
            console.log("a user login in");

            socket.on("test", function (params) {
                console.log("前端-test--params", params);
                const {
                    type,
                    data
                } = params;
                if (type === "init") {
                    console.log("后端即将传数据");
                    socket.emit("back", {
                        type: "refresh",
                        data: data.name + " Jrue",
                    });
                }
            });
        });
    }
}