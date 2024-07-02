//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/


let valReturn = function(n){
    if (typeof(n) == "number")
    {
        return n * n * n;
    }else
    {
        return "ARRR!\n"
    }
}

console.log(valReturn(5));
console.log(valReturn("abc"));



/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let arr = ['Elocution', 21, 'Clean teeth', 100];

function checkValue(val){
    if (typeof(val) == "number")
    {
            return val * val * val;
    }
    else{
            return val +  "ARRR!"
    }
}

let arrReturn = arr.map(checkValue)
   

console.log(arr);
console.log(arrReturn);




