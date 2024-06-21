

const input = require('readline-sync');

//import input from 'readline-sync';

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newString = str.slice(0, 3)
//console.log(newString)

let newString2 = str.slice(3) 
//console.log(newString2)

console.log(newString2 + newString)

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

    let numInput = Number(input.question("Enter the number of letters to be relocated."))

   /* newString = str.slice(0, numInput)
    newString2 = str.slice(numInput) 

    console.log(newString2 + newString)*/


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

    if(numInput > str.length){
        console.log("Number entered is bigger than String length,so defaulting to 3");

        newString = str.slice(0, 3)
        newString2 = str.slice(3) 

        console.log(newString2 + newString)
    }
    else{
        newString = str.slice(0, numInput)
        newString2 = str.slice(numInput) 

        console.log(newString2 + newString)
    }
