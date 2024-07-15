

function checkFive(num){
   let result = '';

   if (num < 5){
     result = num + " is less than 5.";
   } else if (num === 5){
     result = num + " is equal to 5.";
   } else {
     result = num + " is greater than 5.";
   }

   return result;
 }

 console.log("\nResult for 2: ", checkFive(2))
 console.log("Result for -1: ", checkFive(-1), "\n")
 
 console.log("Result for 5: ", checkFive(5))
 console.log("Result for -5: ", checkFive(-5))
 console.log("Result for 5.0: ", checkFive(5.0), "\n")
 
 console.log("Result for 7: ", checkFive(7))
 console.log("Result for 11: ", checkFive(11))


 module.exports = checkFive
