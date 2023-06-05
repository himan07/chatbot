const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://wqfbit-3003.csb.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (message) => {
    console.log("Received message:", message);
    const response = processMessage(message);
    socket.emit("chat message", response);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use(express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3001, () => {
  console.log("Socket.IO server listening on port 3001");
});

function processMessage(message) {
  if (message.toLowerCase() === "hi") {
    return "Hello! How can I assist you?";
  } else if (message.toLowerCase() === "bye") {
    return "Goodbye! Have a great day!";
  } else {
    return "I'm sorry, but I didn't understand your message.";
  }
}
