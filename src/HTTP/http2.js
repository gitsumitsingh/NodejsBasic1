const http2 = require("http2");

// // HTTP2 is secure by default
// const options = {
// key: 'path-to-private-key.pem',
// cert: 'path-to-public-cert.pem'
// };

// Create and initialize the server
// const server = http2.createServer(options);
const server = http2.createServer();

server.on("stream", (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    "content-type": "text/html; charset=utf-8",
    ":status": 200,
  });
  stream.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  console.log("Started server on port 3000");
});
