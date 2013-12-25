var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, callback) {
  if (numsLeft > 0) {
    reader.question("Enter number: ", function (numString) {
      num = parseInt(numString);
      sum += num;
      addNumbers(sum, numsLeft - 1, callback);
    });
  }
  callback(sum);
}

addNumbers(0, 3, function (sum) {
  console.log("Total sum: " + sum);
});