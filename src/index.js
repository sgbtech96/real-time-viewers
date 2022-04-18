const { Server } = require("socket.io");
const io = new Server(3000, {
  cors: {
    origin: "*"
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

io.on("connection", (socket) => {
  setInterval(() => {
    socket.emit("LIVE_VIEWERS", {
      postId: getRandomInt(26),
      viewers: getRandomInt(2000)
    });
  }, 500)
});