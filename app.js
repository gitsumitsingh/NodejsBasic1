var http = require("http");

/**
 * Author: Sumit Singh
 * Date: 24-Aug-2024
 * create a server object
 */

const httpServer = http.createServer(httpHandler);

function httpHandler(req, res) {
  try {
    // Set CORS headers
    // res.setHeader("Access-Control-Allow-Origin", null);
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.setHeader("Content-Type", "application/json");
    // op = 2;
    // let op = 5;

    //To handle errors in the HTTP module you can listen to the error event on the request and response objects
    req.on("error", (err) => {
      console.log("Request error occurred :>> ", err);
      res.statusCode = 400;
      return res.end("Bad Request!");
    });

    res.on("error", (err) => {
      console.log("Response error occurred :>> ", err);
      res.statusCode = 500;
      return res.end("Internal Server Error!");
    });

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return;
    }
    // GET default page
    if (req.url === "/") {
      const responseData = JSON.stringify({ greeting: "Hello World" });
      res.write(responseData);
      res.end();
    }

    // GET profile page
    else if (req.url === "/profile") {
      const responseData = JSON.stringify({ data: "Profile page!" });
      res.write(responseData);
      res.end();
    }

    // GET profile page
    else if (req.url === "/user") {
      let count = 0;
      for (let i = 0; i < 2_00_00_00_000; i++) {
        count += 1;
      }
      const responseData = JSON.stringify({ data: "User page: " + count });
      res.write(responseData);
      res.end();
    }

    // POST Create item
    else if (
      req.url === "/create" &&
      req.method === "POST" &&
      req.headers["content-type"] === "application/json"
    ) {
      //the different way to Send the HTTP header is setHeader or writeHead
      res.setHeader("X-Auth", "TOKEN");

      // The default HTTP Status: 200 : OK
      // The default Content Type: text
      res.writeHead(200, { "Content-Type": "text/json" });
      // Very important: you must stringify the data before sending
      res.write(JSON.stringify({ message: "Hello from POST request" })); //write a response
      res.end(); //end the response
    }

    // if route is not set
    else {
      const message = `Requested page ${req.url} not found!`;
      res.statusCode = 404;
      res.write(JSON.stringify({ message }));
      res.end();
    }
  } catch (err) {
    console.error("Error in createServer Request processing: ", err.message);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/json");
    res.write(
      JSON.stringify({
        message: "Internal Server Error!",
        error: err.message,
        stack: err.stack,
      })
    ); //write a response
    res.end();
  }
}

/*
https://mirzaleka.medium.com/a-detailed-look-into-the-node-js-http-module-680eb5e4548a
*/

module.exports = httpServer;
