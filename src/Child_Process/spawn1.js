const { spawn } = require("node:child_process");
const child = spawn("dir", [__dirname], {
  shell: true,
});
child.stdout.on("data", (data) => {
  console.log(`stdout1: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr2: ${data}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code 3 ${code}`);
});
