var fs = require("fs");

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

//https://www.geeksforgeeks.org/node-js-file-system/
// Asynchronous read
fs.readFile("mynewfile3.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync("mynewfile3.txt");
console.log("Synchronous read: " + data.toString());

// Asynchronous - Opening File
// console.log("opening file!");
fs.open("mynewfile3.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File open successfully1");
});

var buf = new Buffer(1024);

console.log("opening an existing file2");
fs.open("mynewfile3.txt", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!3");
  console.log("reading the file4");

  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.log(err);
    }
    console.log(bytes + " bytes read5");

    // Print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

fs.writeFile("input.txt", "Geeks For Geeks", function (err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!6");
  console.log("Let's read newly written data7");

  fs.readFile("input.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read8: " + data.toString());
  });
});

var data = "\nLearn Node.js";
// Append data to file
fs.appendFile(
  "input.txt",
  data,
  "utf8",
  // Callback function
  function (err) {
    if (err) throw err;

    //  If no error
    console.log("Data is appended to file successfully.9");
  }
);

const { spawn } = require("node:child_process");
const child = spawn("dir", ["D:Sumit:MERN_Stack:NodeProj1"], {
  shell: true,
});
child.stdout.on("data", (data) => {
  console.log(`stdout11: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr12: ${data}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code 13 ${code}`);
});
