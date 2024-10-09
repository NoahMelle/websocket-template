import { Server } from "socket.io";
import { createServer } from "http";
const server = createServer();
import "dotenv/config";

const io = new Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
});

server.listen(process.env.PORT || 4000, () => {
    console.log("Server is running on port " + (process.env.PORT || 4000));
});
