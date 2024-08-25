let http2 = require("http2");

// Create the client
let client = http2.connect("http://localhost:3000");

// Create the request
let req = client.request({
  path: "/",
});

// Listen for incoming message
let str = "";
req.on("data", function (data) {
  str += data;
});

// When the message end log it out
req.on("end", function () {
  console.log("Server Response: ", str);
});

// When the message end log it out
req.on("error", function (err) {
  console.log("Error to connect Server: ", err.message);
});

// End the request
req.end();
