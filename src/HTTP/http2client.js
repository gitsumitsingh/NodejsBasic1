const https = require("https");

// Sample URL
const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();

/* const http2 = require("http2");

// Create the client
const client = http2.connect("http://localhost:5000");

// Create the request
const req = client.request({
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
*/

/*
const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

function writeInfoLogServer(logMessage, url = "") {
  let isLogged = false;
  try {
    let options = {
      httpsAgent: agent,
      headers: {
        "content-type": "application/json",
      },
    };

    let bodyData = {
      id: 11,
      name: "Tom Brady",
      username: "Brad",
      email: "tombrad@asd.com",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", bodyData, options)
      .then((res) => {
        console.log("res: ", res.status, res.data, res);
      })
      .catch((err) => {
        console.error(
          "Error on calling writeInfoLogServer axios catch: " + err.message
        );
      });
  } catch (err) {
    console.error("Error on calling writeInfoLogServer catch: " + err.message);
  }
  return isLogged;
}

*/
