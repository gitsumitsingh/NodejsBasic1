const http = require("https");

let logMessage = "BeSpoke Point /processestimates http request";

// const options = {
//   hostname: "encrypted.google.com",
//   port: 443,
//   path: "/",
//   method: "GET",
// };

const options = {
  hostname: "https://umalpha.powerweaveonline.com",
  // path: "/Basket/WritePunchoutInfoLog",
  // path: "/Basket/WritePunchoutInfoLog?logMessage='bespoke point node test'",
  // method: "Post",
  // body: JSON.stringify({ logMessage }),
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  // },
};

const req = http.request(options, (res) => {
  console.log("statusCode:", res.statusCode);
  console.log("headers:", res.headers);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (e) => {
  console.error(e);
});
req.end();

// const req = http.request(options, (res) => {
//   res.resume();

//   res.on("data", (chunk) => {
//     console.log(`statusCode: ${res.statusCode}`);
//     console.log(`received data: ${chunk}`);
//   });

//   res.on("end", () => {
//     if (!res.complete)
//       console.error(
//         "The connection was terminated while the message was still being sent"
//       );
//   });
// });

// req.on("error", (e) => {
//   console.error(`problem with sending request: ${e.message}`);
// });

// req.end();

// const client = http.connect(
//   "https://umalpha.powerweaveonline.com/Basket/WritePunchoutInfoLog?logMessage='bespoke point node test'"
// );

// // Create the request
// const req = http.request(options);

// // Listen for incoming message
// let str = "";
// req.on("data", function (data) {
//   str += data;
// });

// // When the message end log it out
// req.on("end", function () {
//   console.log("Server Response: ", str);
// });

// // When the message end log it out
// req.on("error", function (err) {
//   console.log("Error to connect Server: ", err.message);
// });

// // End the request
// req.end();
