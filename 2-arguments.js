const age = process.argv.length - 2;

if (age === 0)
  console.log("No argument");
else if (age === 1)
  console.log("Argument found");
else
  console.log("Arguments found");