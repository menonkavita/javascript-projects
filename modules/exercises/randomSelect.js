const { randomArrayElement } = require("../exporting-modules/practiceExports");

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.

  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];

}


//TODO: Export the randomFromArray function.

module.exports = {
  randomFromArray : randomFromArray
}