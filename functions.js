rl = require('readline');
reader = rl.createInterface(process.stdin, process.stdout, null);

// reader.question("Submit number: ", function (answer) {
  
//   reader.close();
//   process.stdin.destroy();
// });



function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
    process.stdin.destroy();
    return;
  }
  
  reader.question("Please give me a number: ", function(answer) {
    let userInput = parseInt(answer);
    sum += userInput;
    console.log(sum);
    addNumbers(sum, numsLeft-1, completionCallback);
  });
  
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
