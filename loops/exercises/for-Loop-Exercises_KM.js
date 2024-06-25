/*Exercise #1: Construct for loops that accomplish the following tasks:
*/
let myNum = 0;


    // a. Print the numbers 0 - 20, one number per line.

    console.log("\nPrinting numbers 0 to 20.")

    for (myNum = 0; myNum <= 20; myNum++){
      console.log(myNum)
    }
    
  
    // b. Print only the ODD values from 3 - 29, one number per line.
    
    console.log("\nPrinting odd numbers from 3 to 29.")

    for(myNum = 3; myNum < 30; myNum++){
      if((myNum % 2) === 1){
        console.log(myNum)
      }
    }

    // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    
    console.log("\nPrinting even numbers from 12 to -14.")

    for (myNum=12; myNum >= -14; myNum--){
      if((myNum % 2) === 0){
        console.log(myNum)
      }
    }

    // d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. 
    //(Your code should work even if you replace 50 or 20 with other numbers). 

    console.log("\nPrinting numbers from 50 to 20 in descending order, but only if the numbers are multiples of 3.")    
    let myNumStart = 50;
    let myNumEnd = 20;

        for (myNum = myNumStart; myNum >= myNumEnd; myNum--){
          //console.log(myNum)
          //console.log("Start number", myNumStart)
          //console.log("End number", myNumEnd)

          if((myNum % 3) === 0){
            console.log(myNum)
          }
        }



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/

let myStr = "Launchcode";
let myStrArr = [1, 5, 'LC101', 'blue', 42];
let myIndex = 0;

//Construct ``for`` loops to accomplish the following tasks:
//  a. Print each element of the array to a new line.

console.log("\nPrinting each element of the array in a new line.")

for(myIndex = 0; myIndex < myStrArr.length; myIndex++){
  console.log(myStrArr[myIndex])
}


//  b. Print each character of the string - in reverse order - to a new line. */ 

console.log("\nPrinting each character of the string - in reverse order - to a new line.")

let strReverse = "";

for(myIndex = myStr.length-1; myIndex >= 0; myIndex--){
  console.log(myStr[myIndex])
  strReverse = strReverse + myStr[myIndex]
}

//console.log("Reverse of Launchcoode is ", strReverse)    --- Not asked to be done in the Exercise.


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays: */
  
myStrArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]

// a. One array contains the even numbers, and the other holds the odds.

let evenArr = [];
let oddArr = [];

for(myIndex = 0; myIndex < myStrArr.length; myIndex++){
  if((myStrArr[myIndex] % 2) === 0){
    evenArr.push(myStrArr[myIndex]) 
  }
  else{
    oddArr.push(myStrArr[myIndex])
  }
}

// b. Print the arrays to confirm the results. */

console.log("\nThis array contains EVEN numbers ", evenArr)
console.log("This array contains ODD numbers ", oddArr)


