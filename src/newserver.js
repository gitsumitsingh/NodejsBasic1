var http = require("http");
const fs = require("fs");
// const userPage = require("./User.html");
http
  .createServer(function (req, res) {
    try {
      res.setHeader("Content-Type", "application/json");
      // op = 2;
      // GET default page
      if (req.url === "/") {
        const responseData = JSON.stringify({ greeting: "Hello World" });
        res.write(responseData);
        res.end();
      }

      // GET user page
      else if (req.url === "/user") {
        fetch("http://localhost:3000/user")
          .then((response) => response.json())
          .then((userData) => {
            console.log("user fetch success: ", userData);
            res.statusCode = 200;
            res.write(
              JSON.stringify({
                message: "Success",
                details: userData,
              })
            ); //write a response
            res.end();
          })
          .catch((err) => {
            console.error("Error in createServer fetch user: ", err.message);
            res.statusCode = 500;
            res.write(
              JSON.stringify({
                message: "Internal Server Error!",
                error: err.message,
                stack: err.stack,
              })
            ); //write a response
            res.end();
          });

        // const responseData = JSON.stringify({ data: "User page!" });
        // res.write(responseData);
        // res.end();
      }

      // GET profile page
      else if (req.url === "/profile") {
        fs.readFile(__dirname + "/Views/User.html", function (err, data) {
          if (err) {
            const message = `User.html file not found!`;
            res.statusCode = 404;
            res.write(JSON.stringify({ message, details: err.message }));
            res.end();
            return;
          }
          if (data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
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
      res.write(
        JSON.stringify({
          message: "Internal Server Error!",
          error: err.message,
          stack: err.stack,
        })
      ); //write a response
      res.end();
    }
  })
  .listen(8080, function () {
    console.log("Server started on localhost:8080");
  });
