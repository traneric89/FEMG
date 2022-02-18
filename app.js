const http = require("http");
const express = require("express");
const app = express();

const server = http.Server(app);
const io = require("socket.io")(server);

server.listen(3000);

//serve static files from root directory (script.js)
app.use(express.static(__dirname));

// const fs = require("fs");
// const index = fs.readFileSync("index.html");
const SerialPort = require("serialport");

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
  delimiter: "\r\n",
});

const port = new SerialPort("COM3", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

io.on("connection", (socket) => {
  console.log("socket connected");
});

parser.on("data", (data) => {
  console.log(data);
  io.emit("data", data);
});
