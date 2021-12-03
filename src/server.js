const express = require("express");
const app = express();
const taskRoutes = require("./routes/task.routes");
const morgan = require("morgan");
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

// BEGIN - socket
io.on("connection", (socket) => {
  socket.on("task:created", (msg) => {
    io.emit("task:update", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// END - socket

// Settings.
app.set("port", process.env.PORT || 3500);

// Middlewares.
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes.
app.use("/api/task", taskRoutes);

module.exports = {
  app,
  server,
};
