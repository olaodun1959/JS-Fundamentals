const arg = process.argv[2];
const x = parseInt(arg);

if (!x || x <= 0) {
  // do nothing, print nothing
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}