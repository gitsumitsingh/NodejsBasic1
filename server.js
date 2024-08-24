const httpServer = require("./app");

httpServer.listen(3000, function () {
  console.log("Server started on localhost:3000");
  //the server object listens on port 3000
});
