const io = require("socket.io")(4000, {
    cors: {
        origin: '*',
    }
});

let info = 'andre';

io.on("connection", socket => {
    console.log("USUARIO: " + socket.id);

    socket.emit("info", info);

    socket.on("newinfo", (data) => {
        info = data
        io.emit("info", info);
        console.log(data)
    });
})