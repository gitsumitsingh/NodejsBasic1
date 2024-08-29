const httpServer = require("./app");

const Port = 7000;

httpServer.listen(Port, function () {
  //the server object listens on port 7000
  console.log(`Server started on localhost:${Port}`);
  console.log(`Worker/Process pid: ${process.pid}`);
});
