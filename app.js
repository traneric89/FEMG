// const bluetooth = require("node-bluetooth");

const express = require("express");

// // create bluetooth device instance
// const device = new bluetooth.DeviceINQ();

// device.listPairedDevices(console.log);

const exppress = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
