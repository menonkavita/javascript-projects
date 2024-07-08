function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.

 function displayThreeRandItems(arr){
  let tempArr = [];

      for (i=0; i< 3; i++) {
        let randomNum = Math.floor(Math.random() * arr.length);
        tempArr.push(arr[randomNum]);
        //console.log(`Random item ${i+1} is ${arr[randomNum]}`)

    }
    return tempArr;
 }
 console.log("\n\nPart a: Print 3 random selections from each array. \n")
 console.log("3 Random items from 'happiness' Array", displayThreeRandItems(happiness));
 console.log("3 Random items from 'words' Array", displayThreeRandItems(words),"\n");

 


 //  b) Have the code randomly pick one array, and then print 2 random items from it.
 //  let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 //  let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

function pickRandomArr(arr1, arr2){
  let randomNum1 = Math.floor(Math.random() * 2)
  let randArr = [];

  if(randomNum1 < 1){
    for(i=0; i < 2; i++){
      let randomArrNum = Math.floor(Math.random() * arr1.length)
      randArr.push(arr1[randomArrNum]);

      //console.log(`Random number from Arr 1 ${i+1} is ${arr1[randomArrNum]}`)
      randomArrNum = 0;
    }
  } 
  else{
    for(i=0; i < 2; i++){
      let randomArrNum = Math.floor(Math.random() * arr2.length)
      randArr.push(arr2[randomArrNum]);
      
      //console.log(`Random number from Arr 2 ${i+1} is ${arr2[randomArrNum]}`)
      randomArrNum = 0;
    }
  }
  return randArr;
}

console.log("\nPart b: Have the code randomly pick one array, and then print 2 random items from it.")
console.log(pickRandomArr(happiness, words), "\n");



 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

 // let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 // let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

function fillRandomWords(arr1, arr2){
  let newArr = [];

 /* let randNumArr1 = Math.floor(Math.random() * arr1.length);
  let randNumArr2 = Math.floor(Math.random() * arr2.length);

  console.log(`Random words from both arrays are - ${arr1[randNumArr1]}, ${arr2[randNumArr2]}`)*/   // ----------
  // newArr.push(arr1[randNumArr1])
  // newArr.push(arr2[randNumArr2])

  newArr.push(arr1[Math.floor(Math.random() * arr1.length)])
  newArr.push(arr2[Math.floor(Math.random() * arr2.length)])

  return newArr;
}

console.log("\nPart c: Create a new array, then fill it with one random item from words and happiness. Print the new array.")
console.log("Picked random words from both arrays", fillRandomWords(happiness, words),"\n");



 