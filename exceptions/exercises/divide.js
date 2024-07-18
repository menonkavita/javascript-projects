
const input = require('readline-sync')

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function myDivide(numerator, denominator){
    if (denominator === 0){
        throw Error("Attempted to divide by zero.");
    }
   
    return numerator/denominator;
}


let num1, num2;
num1 = Number(input.question("Enter the number to be divided."));
num2 = Number(input.question("Enter the that you would like to divide it with."))

console.log(myDivide(num1, num2));



