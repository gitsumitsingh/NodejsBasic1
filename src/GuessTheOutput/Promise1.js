console.log("first");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log("then success2");
  });

console.log(3);
console.log(4);

/*
Below will be the output
first
1
2
3
4
timerStart
timerEnd
success
then success2
*/
