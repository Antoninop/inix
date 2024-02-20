import { Server } from "socket.io";
import http from "http";
import process from 'process'; 


const server = http.createServer();
const io = new Server(server);

io.on("connection", () => { 
    console.log("A user connected");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});