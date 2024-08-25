const http2 = require("http2");

// // HTTP2 is secure by default
// const options = {
// key: 'path-to-private-key.pem',
// cert: 'path-to-public-cert.pem'
// };

// Create and initialize the secure server like https://localhost:3000
// const server = http2.createServer(options);

// Create an unencrypted HTTP/2 server
const server = http2.createServer();

server.on("stream", (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    "content-type": "text/html; charset=utf-8",
    ":status": 200,
  });

  stream.on("error", (error) =>
    console.error("Error in Streaming Server", error)
  );

  stream.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  console.log("Started server on port 3000");
});
